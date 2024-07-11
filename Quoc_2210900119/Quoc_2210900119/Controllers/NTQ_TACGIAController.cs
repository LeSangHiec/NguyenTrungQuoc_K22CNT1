using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Quoc_2210900119.Models;

namespace Quoc_2210900119.Controllers
{
    public class NTQ_TACGIAController : Controller
    {
        private Quoc_2210900119Entities db = new Quoc_2210900119Entities();

        // GET: NTQ_TACGIA
        public ActionResult NtqIndex()
        {
            return View(db.NTQ_TACGIA.ToList());
        }

        // GET: NTQ_TACGIA/Details/5
        public ActionResult NtqDetails(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            NTQ_TACGIA nTQ_TACGIA = db.NTQ_TACGIA.Find(id);
            if (nTQ_TACGIA == null)
            {
                return HttpNotFound();
            }
            return View(nTQ_TACGIA);
        }

        // GET: NTQ_TACGIA/Create
        public ActionResult NtqCreate()
        {
            return View();
        }

        // POST: NTQ_TACGIA/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult NtqCreate([Bind(Include = "Ntq_MaTG,Ntq_TenTG")] NTQ_TACGIA nTQ_TACGIA)
        {
            if (ModelState.IsValid)
            {
                db.NTQ_TACGIA.Add(nTQ_TACGIA);
                db.SaveChanges();
                return RedirectToAction("NtqIndex");
            }

            return View(nTQ_TACGIA);
        }

        // GET: NTQ_TACGIA/Edit/5
        public ActionResult NtqEdit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            NTQ_TACGIA nTQ_TACGIA = db.NTQ_TACGIA.Find(id);
            if (nTQ_TACGIA == null)
            {
                return HttpNotFound();
            }
            return View(nTQ_TACGIA);
        }

        // POST: NTQ_TACGIA/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult NtqEdit([Bind(Include = "Ntq_MaTG,Ntq_TenTG")] NTQ_TACGIA nTQ_TACGIA)
        {
            if (ModelState.IsValid)
            {
                db.Entry(nTQ_TACGIA).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("NtqIndex");
            }
            return View(nTQ_TACGIA);
        }

        // GET: NTQ_TACGIA/Delete/5
        public ActionResult NtqDelete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            NTQ_TACGIA nTQ_TACGIA = db.NTQ_TACGIA.Find(id);
            if (nTQ_TACGIA == null)
            {
                return HttpNotFound();
            }
            return View(nTQ_TACGIA);
        }

        // POST: NTQ_TACGIA/Delete/5
        [HttpPost, ActionName("NtqDelete")]
        [ValidateAntiForgeryToken]
        public ActionResult NtqDeleteConfirmed(string id)
        {
            NTQ_TACGIA nTQ_TACGIA = db.NTQ_TACGIA.Find(id);
            db.NTQ_TACGIA.Remove(nTQ_TACGIA);
            db.SaveChanges();
            return RedirectToAction("NtqIndex");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
