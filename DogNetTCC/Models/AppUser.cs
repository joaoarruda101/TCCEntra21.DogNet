using Microsoft.AspNetCore.Identity;

namespace DogNet.Models
{
    public class AppUser : IdentityUser
    {
        public string Nome { get; set; }
    }
}
