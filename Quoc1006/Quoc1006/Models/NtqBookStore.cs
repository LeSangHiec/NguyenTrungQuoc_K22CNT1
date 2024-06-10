using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Security.Permissions;
using System.Web;

namespace Quoc1006.Models
{
    public class NtqBookStore : DbContext
    {
        public NtqBookStore() : base("NtqBookStoreConnectionStrings")
        {

        }
        //Tao cac bang
        public DbSet<NtqCategory> NtqCategories { get; set; }
        public DbSet<NtqBook> NtqBooks { get; set; }
    }

}