﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Quoc_2210900119.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class Quoc_2210900119Entities : DbContext
    {
        public Quoc_2210900119Entities()
            : base("name=Quoc_2210900119Entities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<NTQ_SACH> NTQ_SACH { get; set; }
        public virtual DbSet<NTQ_TACGIA> NTQ_TACGIA { get; set; }
        public virtual DbSet<sysdiagrams> sysdiagrams { get; set; }
    }
}