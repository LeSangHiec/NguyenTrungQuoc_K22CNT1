using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using NtqBaiKiemTraGiuaKi.Models;

namespace NtqBaiKiemTraGiuaKi.Controllers
{
    public class NtqKhoasController : Controller
    {
        private NtqK22CNT1Lesoon07bEntities1 db = new NtqK22CNT1Lesoon07bEntities1();

        // GET: NtqKhoas
        public ActionResult NtqIndex()
        {
            return View(db.NtqKhoa.ToList());
        }

        // GET: NtqKhoas/Details/5
        public ActionResult NtqDetails(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            NtqKhoa ntqKhoa = db.NtqKhoa.Find(id);
            if (ntqKhoa == null)
            {
                return HttpNotFound();
            }
            return View(ntqKhoa);
        }

        // GET: NtqKhoas/Create
        public ActionResult NtqCreate()
        {
            return View();
        }

        // POST: NtqKhoas/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult NtqCreate([Bind(Include = "NtqMaKhoa,NtqTenKhoa,NtqTrangThai")] NtqKhoa ntqKhoa)
        {
            if (ModelState.IsValid)
            {
                db.NtqKhoa.Add(ntqKhoa);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(ntqKhoa);
        }

        // GET: NtqKhoas/Edit/5
        public ActionResult NtqEdit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            NtqKhoa ntqKhoa = db.NtqKhoa.Find(id);
            if (ntqKhoa == null)
            {
                return HttpNotFound();
            }
            return View(ntqKhoa);
        }

        // POST: NtqKhoas/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult NtqEdit([Bind(Include = "NtqMaKhoa,NtqTenKhoa,NtqTrangThai")] NtqKhoa ntqKhoa)
        {
            if (ModelState.IsValid)
            {
                db.Entry(ntqKhoa).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(ntqKhoa);
        }

        // GET: NtqKhoas/Delete/5
        public ActionResult NtqDelete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            NtqKhoa ntqKhoa = db.NtqKhoa.Find(id);
            if (ntqKhoa == null)
            {
                return HttpNotFound();
            }
            return View(ntqKhoa);
        }

        // POST: NtqKhoas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            NtqKhoa ntqKhoa = db.NtqKhoa.Find(id);
            db.NtqKhoa.Remove(ntqKhoa);
            db.SaveChanges();
            return RedirectToAction("Index");
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
