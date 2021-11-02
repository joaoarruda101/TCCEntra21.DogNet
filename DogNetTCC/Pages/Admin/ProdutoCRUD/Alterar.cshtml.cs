using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using DogNet.Models;
using DogNet.Data;
using Microsoft.AspNetCore.Hosting;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace DogNet.Views.ProdutoCRUD
{
    public class AlterarModel : PageModel
    {        
        private readonly DogNetMvcContext _context;

        private readonly IWebHostEnvironment _webHostEnvironment;

        [BindProperty]
        public Produto Produto { get; set; }

        public string CaminhoImagem { get; set; }

        [BindProperty]
        [Display(Name = "Imagem do Produto")]        
        public IFormFile ImagemProduto { get; set; }

        public AlterarModel(DogNetMvcContext context, IWebHostEnvironment webHostEnvironment)
        {
            _context = context;
            _webHostEnvironment = webHostEnvironment;            
        }        

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Produto = await _context.Produtos.FirstOrDefaultAsync(m => m.IdProduto == id);

            if (Produto == null)
            {
                return NotFound();
            }

            CaminhoImagem = $"~/img/produto/{Produto.IdProduto:D6}.jpg";            

            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Attach(Produto).State = EntityState.Modified;           

            try
            {
                await _context.SaveChangesAsync();
                //se há uma imagem de produto submetida
                if (ImagemProduto != null)
                    await AppUtils.ProcessarArquivoDeImagem(Produto.IdProduto,
                        ImagemProduto, _webHostEnvironment);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExisteProduto(Produto.IdProduto))
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

        private bool ExisteProduto(int id)
        {
            return _context.Produtos.Any(e => e.IdProduto == id);
        }
    }
}