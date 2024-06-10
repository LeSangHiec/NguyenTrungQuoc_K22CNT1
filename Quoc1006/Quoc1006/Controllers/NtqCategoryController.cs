using Quoc1006.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Quoc1006.Controllers
{
    public class NtqCategoryController : Controller
    {
        private static NtqBookStore _NtqbookStore;
        public NtqCategoryController()
        {
            _NtqbookStore = new NtqBookStore();
        }
        // GET: LttCategory
        public ActionResult NtqIndex()
        {
            var ntqCategory = _NtqbookStore.NtqCategories.ToList();
            return View(ntqCategory);
        }
        [HttpGet]
        public ActionResult NtqCreate()
        {
            var ntqCategory = new NtqCategory();
            return View();
        }
        [HttpPost]
        public ActionResult NtqCreate(NtqCategory ntqCategory)
        {
            _NtqbookStore.NtqCategories.Add(ntqCategory);
            _NtqbookStore.SaveChanges();
            return RedirectToAction("NtqIndex");
        }
    }
}