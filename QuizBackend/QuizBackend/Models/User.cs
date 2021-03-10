using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace QuizBackend.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        [Column(TypeName = "nvarchar(20)")]

        public string FirstName { get; set; }

        [Column(TypeName = "nvarchar(20)")]

        public string LastName { get; set; }

        [Column(TypeName = "nvarchar(20)")]

        public string Email { get; set; }

        [Column(TypeName = "nvarchar(20)")]

        public string Phone { get; set; }


        [Column(TypeName="nvarchar(20)")]
        public string UserName { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string Password { get; set; }
    }
}
