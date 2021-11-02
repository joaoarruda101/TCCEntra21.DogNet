using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using DogNet.Models;
using DogNet.Data;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.AspNetCore.Authorization;

namespace DogNet.Views.ClienteCRUD
{
    [Authorize(Policy = "isAdmin")]
    public class AlterarModel : PageModel
    {        
        private readonly DogNetMvcContext _context;

        public AlterarModel(DogNetMvcContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Cliente Cliente { get; set; }
        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Cliente = await _context.Clientes.FirstOrDefaultAsync(m => m.IdCliente == id);

            if (Cliente == null)
            {
                return NotFound();
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            //para garantir que o CPF e o E-mail não serão atualizados
            var cliente = await _context.Clientes.Select(m => new { m.IdCliente, m.Email, m.CPF }).FirstOrDefaultAsync(m => m.IdCliente == Cliente.IdCliente);            
            Cliente.Email = cliente.Email;
            Cliente.CPF = cliente.CPF;

            //ModelState.ClearValidationState("Cliente.Email");
            //ModelState.ClearValidationState("Cliente.CPF");

            if (ModelState.Keys.Contains("Cliente.Email"))
            {
                ModelState["Cliente.Email"].Errors.Clear();
                ModelState.Remove("Cliente.Email");
            }
            if (ModelState.Keys.Contains("Cliente.CPF"))
            {
                ModelState["Cliente.CPF"].Errors.Clear();
                ModelState.Remove("Cliente.CPF");
            }

            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Attach(Cliente).State = EntityState.Modified;
            _context.Attach(Cliente.Endereco).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClienteExists(Cliente.IdCliente))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return RedirectToPage("./Listar");
        }

        private bool ClienteExists(int id)
        {
            return _context.Clientes.Any(e => e.IdCliente == id);
        }
    }
}