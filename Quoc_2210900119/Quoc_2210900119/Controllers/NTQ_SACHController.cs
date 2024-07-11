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
    public class NTQ_SACHController : Controller
    {
        private Quoc_2210900119Entities db = new Quoc_2210900119Entities();

        // GET: NTQ_SACH
        public ActionResult NtqIndex()
        {
            var nTQ_SACH = db.NTQ_SACH.Include(n => n.NTQ_TACGIA);
            return View(nTQ_SACH.ToList());
        }

        // GET: NTQ_SACH/Details/5
        public ActionResult NtqDetails(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            NTQ_SACH nTQ_SACH = db.NTQ_SACH.Find(id);
            if (nTQ_SACH == null)
            {
                return HttpNotFound();
            }
            return View(nTQ_SACH);
        }

        // GET: NTQ_SACH/Create
        public ActionResult NtqCreate()
        {
            ViewBag.Ntq_MaTG = new SelectList(db.NTQ_TACGIA, "Ntq_MaTG", "Ntq_TenTG");
            return View();
        }

        // POST: NTQ_SACH/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult NtqCreate([Bind(Include = "Ntq_MaSach,Ntq_TenSach,Ntq_SoTrang,Ntq_NamXB,Ntq_MaTG,Ntq_TrangThai")] NTQ_SACH nTQ_SACH)
        {
            if (ModelState.IsValid)
            {
                db.NTQ_SACH.Add(nTQ_SACH);
                db.SaveChanges();
                return RedirectToAction("NtqIndex");
            }

            ViewBag.Ntq_MaTG = new SelectList(db.NTQ_TACGIA, "Ntq_MaTG", "Ntq_TenTG", nTQ_SACH.Ntq_MaTG);
            return View(nTQ_SACH);
        }

        // GET: NTQ_SACH/Edit/5
        public ActionResult NtqEdit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            NTQ_SACH nTQ_SACH = db.NTQ_SACH.Find(id);
            if (nTQ_SACH == null)
            {
                return HttpNotFound();
            }
            ViewBag.Ntq_MaTG = new SelectList(db.NTQ_TACGIA, "Ntq_MaTG", "Ntq_TenTG", nTQ_SACH.Ntq_MaTG);
            return View(nTQ_SACH);
        }

        // POST: NTQ_SACH/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult NtqEdit([Bind(Include = "Ntq_MaSach,Ntq_TenSach,Ntq_SoTrang,Ntq_NamXB,Ntq_MaTG,Ntq_TrangThai")] NTQ_SACH nTQ_SACH)
        {
            if (ModelState.IsValid)
            {
                db.Entry(nTQ_SACH).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("NtqIndex");
            }
            ViewBag.Ntq_MaTG = new SelectList(db.NTQ_TACGIA, "Ntq_MaTG", "Ntq_TenTG", nTQ_SACH.Ntq_MaTG);
            return View(nTQ_SACH);
        }

        // GET: NTQ_SACH/Delete/5
        public ActionResult NtqDelete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            NTQ_SACH nTQ_SACH = db.NTQ_SACH.Find(id);
            if (nTQ_SACH == null)
            {
                return HttpNotFound();
            }
            return View(nTQ_SACH);
        }

        // POST: NTQ_SACH/Delete/5
        [HttpPost, ActionName("NtqDelete")]
        [ValidateAntiForgeryToken]
        public ActionResult NtqDeleteConfirmed(string id)
        {
            NTQ_SACH nTQ_SACH = db.NTQ_SACH.Find(id);
            db.NTQ_SACH.Remove(nTQ_SACH);
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
