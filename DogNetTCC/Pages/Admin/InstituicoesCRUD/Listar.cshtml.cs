using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DogNet.Data;
using DogNet.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;

namespace DogNet.Pages.Admin.InstuicoesCRUD
{
    public class ListarModel : PageModel
    {
        private readonly DogNetMvcContext _context;
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public IList<string> EmailsAdmins { get; set; }

        public ListarModel(DogNetMvcContext context,
            UserManager<AppUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            this._context = context;
            this._userManager = userManager;
            this._roleManager = roleManager;
        }

        public IList<Instituicoes> InstituicoesLista { get; set; }

        public async Task OnGetAsync()
        {
            EmailsAdmins = (await _userManager.GetUsersInRoleAsync("admin")).
                Select(x => x.Email).ToList();
            InstituicoesLista = await _context.Instituicoes.ToListAsync();
        }

        public async Task<IActionResult> OnPostDeleteAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var cliente = await _context.Instituicoes.FindAsync(id);

            if (cliente != null)
            {
                _context.Instituicoes.Remove(cliente);
                if (await _context.SaveChangesAsync() > 0)
                {
                    AppUser usuario = await _userManager.FindByNameAsync(cliente.Email);
                    if (usuario != null) await _userManager.DeleteAsync(usuario);
                }
            }

            return RedirectToPage("./Listar");
        }

        public async Task<IActionResult> OnPostDelAdminAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var inst = await _context.Instituicoes.FindAsync(id);

            if (inst != null)
            {
                AppUser usuario = await _userManager.FindByNameAsync(inst.Email);
                if (inst != null)
                {
                    await _userManager.RemoveFromRoleAsync(usuario, "admin");
                }
            }

            return RedirectToPage("./Listar");
        }

        public async Task<IActionResult> OnPostSetAdminAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var inst = await _context.Instituicoes.FindAsync(id);

            if (inst != null)
            {
                AppUser usuario = await _userManager.FindByNameAsync(inst.Email);
                if (usuario != null)
                {
                    if (!await _roleManager.RoleExistsAsync("admin"))
                        await _roleManager.CreateAsync(new IdentityRole("admin"));

                    await _userManager.AddToRoleAsync(usuario, "admin");
                }
            }

            return RedirectToPage("./Listar");
        }
    }
}

