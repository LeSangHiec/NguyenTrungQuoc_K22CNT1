using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Quoc1006.Models
{
    public class NtqCategory
    {
        [Key]
        public int NtqCategoryId { get; set; }
        public string NtqCategoryName { get; set; }

        //Thuoc tinh quan he
        public virtual ICollection<NtqBook> NtqBooks { get; set; }
    }

}