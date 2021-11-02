using System.Threading.Tasks;
using DogNet.Data;
using DogNet.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.AspNetCore.Authorization;

namespace DogNet.Views.ClienteCRUD
{
    [Authorize(Policy = "isAdmin")]
    public class IncluirModel : PageModel
    {

        [BindProperty]
        public Cliente Cliente { get; set; }

        private readonly DogNetMvcContext _context;

        public IncluirModel(DogNetMvcContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            var cliente = new Cliente();
            cliente.Endereco = new Endereco();
            //novos clientes sempre iniciam com essa situação
            cliente.Situacao = Cliente.SituacaoCliente.Cadastrado;

            if (await TryUpdateModelAsync(cliente, Cliente.GetType(), nameof(Cliente)))
            {
                _context.Clientes.Add(cliente);
                await _context.SaveChangesAsync();
                return RedirectToPage("./Listar");
            }
            
            return Page();
        }

    }
}