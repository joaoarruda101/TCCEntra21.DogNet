using System.Threading.Tasks;
using DogNet.Data;
using DogNet.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Hosting;


namespace DogNet.Views.ProdutoCRUD
{
    public class IncluirModel : PageModel
    {
        [BindProperty]
        public Produto Produto { get; set; }

        private readonly DogNetMvcContext _context;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public string CaminhoImagem { get; set; }

        [BindProperty]
        [Display(Name = "Imagem do Produto")]
        [Required(ErrorMessage = "O campo \"{0}\" é de preenchimento obrigatório.")]
        public IFormFile ImagemProduto { get; set; }

        public IncluirModel(DogNetMvcContext context, IWebHostEnvironment webHostEnvironment)
        {
            _context = context;
            _webHostEnvironment = webHostEnvironment;
            CaminhoImagem = "~/img/produto/sem_imagem.jpg";
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (ImagemProduto == null)
            {
                return Page();
            }

            var produto = new Produto();

            if (await TryUpdateModelAsync(produto, Produto.GetType(), nameof(Produto)))
            {
                _context.Produtos.Add(produto);
                await _context.SaveChangesAsync();
                await AppUtils.ProcessarArquivoDeImagem(produto.IdProduto, 
                    ImagemProduto, _webHostEnvironment);
                return RedirectToPage("./Listar");
            }
            
            return Page();
        }        
    }
}