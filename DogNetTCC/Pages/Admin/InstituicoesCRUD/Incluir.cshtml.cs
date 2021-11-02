using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DogNet.Data;
using DogNet.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DogNet.Pages.Admin.InstituicoesCRUD
{
    [Authorize(Policy = "isAdmin")]
    public class IncluirModel : PageModel
    {
       
            [BindProperty]
            public Instituicoes Instituicoes { get; set; }

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
                var instituicoes = new Instituicoes();
                instituicoes.Endereco = new Endereco();

                if (await TryUpdateModelAsync(instituicoes, Instituicoes.GetType(), nameof(Instituicoes)))
                {
                    _context.Instituicoes.Add(instituicoes);
                    await _context.SaveChangesAsync();
                    return RedirectToPage("./Listar");
                }

                return Page();
            }

        }
    }

