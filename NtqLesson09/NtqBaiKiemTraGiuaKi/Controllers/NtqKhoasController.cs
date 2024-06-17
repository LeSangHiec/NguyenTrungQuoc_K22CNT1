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
    public class ntqKhoasController : Controller
    {
        private NtqK22CNT1Lesson07bEntities db = new NtqK22CNT1Lesson07bEntities();

        // GET: ntqKhoas
        public ActionResult Index()
        {
            return View(db.ntqKhoa.ToList());
        }

        // GET: ntqKhoas/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ntqKhoa ntqKhoa = db.ntqKhoa.Find(id);
            if (ntqKhoa == null)
            {
                return HttpNotFound();
            }
            return View(ntqKhoa);
        }

        // GET: ntqKhoas/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ntqKhoas/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "NtqMaKH,NtqTenKH,NtqTrangThai")] ntqKhoa ntqKhoa)
        {
            if (ModelState.IsValid)
            {
                db.ntqKhoa.Add(ntqKhoa);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(ntqKhoa);
        }

        // GET: ntqKhoas/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ntqKhoa ntqKhoa = db.ntqKhoa.Find(id);
            if (ntqKhoa == null)
            {
                return HttpNotFound();
            }
            return View(ntqKhoa);
        }

        // POST: ntqKhoas/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "NtqMaKH,NtqTenKH,NtqTrangThai")] ntqKhoa ntqKhoa)
        {
            if (ModelState.IsValid)
            {
                db.Entry(ntqKhoa).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(ntqKhoa);
        }

        // GET: ntqKhoas/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ntqKhoa ntqKhoa = db.ntqKhoa.Find(id);
            if (ntqKhoa == null)
            {
                return HttpNotFound();
            }
            return View(ntqKhoa);
        }

        // POST: ntqKhoas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            ntqKhoa ntqKhoa = db.ntqKhoa.Find(id);
            db.ntqKhoa.Remove(ntqKhoa);
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
