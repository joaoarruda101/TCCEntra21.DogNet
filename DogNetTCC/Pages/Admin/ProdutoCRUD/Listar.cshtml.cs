using DogNet.Data;
using DogNet.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using System.Linq;

namespace DogNet.Views.ProdutoCRUD
{
    public class ListarModel : PageModel
    {
        private readonly DogNetMvcContext _context;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public ListarModel(DogNetMvcContext context, 
            IWebHostEnvironment webHostEnvironment)
        {
            _context = context;
            _webHostEnvironment = webHostEnvironment;
        }

        public IList<Produto> Produtos { get; set; }

        public async Task OnGetAsync()
        {
            Produtos = await _context.Produtos.OrderBy(p => p.Nome).ToListAsync();
        }

        public async Task<IActionResult> OnPostDeleteAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var produto = await _context.Produtos.FindAsync(id);

            if (produto != null)
            {
                _context.Produtos.Remove(produto);
                if (await _context.SaveChangesAsync() > 0)
                {
                    var caminhoArquivoImagem = Path.Combine(
                        _webHostEnvironment.WebRootPath,
                        "img\\produto",
                        produto.IdProduto.ToString("D6") + ".jpg");
                    if (System.IO.File.Exists(caminhoArquivoImagem))
                    {
                        System.IO.File.Delete(caminhoArquivoImagem);
                    }
                }
            }

            return RedirectToPage("./Listar");
        }
    }
}