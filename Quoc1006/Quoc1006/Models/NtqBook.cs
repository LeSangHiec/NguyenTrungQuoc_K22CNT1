using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Quoc1006.Models
{
    public class NtqBook
    {
        [Key]
        public int NtqBookId { get; set; }
        public string NtqTitle { get; set; }
        public string NtqAuthor { get; set; }
        public int NtqYear { get; set; }
        public string NtqPublisher { get; set; }
        public string NtqPicture { get; set; }
        public int NtqCategoryId { get; set; }

        // Thuoc tinh quan he
        public virtual NtqCategory NtqCategory { get; set; }


    }
}