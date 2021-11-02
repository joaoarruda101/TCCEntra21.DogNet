using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using DogNet.Data;
using DogNet.Models;


namespace DogNet.Views
{
    [Authorize(Roles = "cliente")]
    public class FinalizarPedidoModel : PageModel
    {
        private DogNetMvcContext _context;


        public string COOKIE_NAME
        {
            get { return ".AspNetCore.CartId"; }
        }

        public Pedido Pedido { get; set; }

        public Cliente Cliente { get; set; }

        public FinalizarPedidoModel(DogNetMvcContext context)
        {
            _context = context;

        }

        public async Task<IActionResult> OnGetAsync()
        {
            if (Request.Cookies.ContainsKey(COOKIE_NAME))
            {
                var cartId = Request.Cookies[COOKIE_NAME];

                Pedido = await _context.Pedidos.Include("ItensPedido").
                    Include("ItensPedido.Produto").FirstOrDefaultAsync(p => p.IdCarrinho == cartId);

                Cliente = await _context.Clientes.FirstOrDefaultAsync(c => c.Email == User.Identity.Name);

                if ((Pedido.IdCliente > 0) && (Pedido.Endereco != null))
                {
                    Pedido.Situacao = Pedido.SituacaoPedido.Realizado;
                    Pedido.DataHoraPedido = DateTime.UtcNow;
                    foreach (var item in Pedido.ItensPedido)
                    {
                        item.Produto.Estoque -= (int)item.Quantidade;
                    }
                    await _context.SaveChangesAsync();
                    Response.Cookies.Delete(COOKIE_NAME);
                    return Page();
                }
                else
                {
                    return RedirectToPage("/ConfirmarPedido");
                }
            }

            return RedirectToPage("/Carrinho");
        }



    }
}