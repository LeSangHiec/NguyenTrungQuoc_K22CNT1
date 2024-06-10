using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Quoc1006.Models;

namespace Quoc1006.Controllers
{
    public class NtqBooksController : Controller
    {
        private NtqBookStore db = new NtqBookStore();

        // GET: NtqBooks
        public ActionResult Index()
        {
            var ntqBooks = db.NtqBooks.Include(n => n.NtqCategory);
            return View(ntqBooks.ToList());
        }

        // GET: NtqBooks/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            NtqBook ntqBook = db.NtqBooks.Find(id);
            if (ntqBook == null)
            {
                return HttpNotFound();
            }
            return View(ntqBook);
        }

        // GET: NtqBooks/Create
        public ActionResult Create()
        {
            ViewBag.NtqCategoryId = new SelectList(db.NtqCategories, "NtqCategoryId", "NtqCategoryName");
            return View();
        }

        // POST: NtqBooks/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "NtqBookId,NtqTitle,NtqAuthor,NtqYear,NtqPublisher,NtqPicture,NtqCategoryId")] NtqBook ntqBook)
        {
            if (ModelState.IsValid)
            {
                db.NtqBooks.Add(ntqBook);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.NtqCategoryId = new SelectList(db.NtqCategories, "NtqCategoryId", "NtqCategoryName", ntqBook.NtqCategoryId);
            return View(ntqBook);
        }

        // GET: NtqBooks/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            NtqBook ntqBook = db.NtqBooks.Find(id);
            if (ntqBook == null)
            {
                return HttpNotFound();
            }
            ViewBag.NtqCategoryId = new SelectList(db.NtqCategories, "NtqCategoryId", "NtqCategoryName", ntqBook.NtqCategoryId);
            return View(ntqBook);
        }

        // POST: NtqBooks/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "NtqBookId,NtqTitle,NtqAuthor,NtqYear,NtqPublisher,NtqPicture,NtqCategoryId")] NtqBook ntqBook)
        {
            if (ModelState.IsValid)
            {
                db.Entry(ntqBook).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.NtqCategoryId = new SelectList(db.NtqCategories, "NtqCategoryId", "NtqCategoryName", ntqBook.NtqCategoryId);
            return View(ntqBook);
        }

        // GET: NtqBooks/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            NtqBook ntqBook = db.NtqBooks.Find(id);
            if (ntqBook == null)
            {
                return HttpNotFound();
            }
            return View(ntqBook);
        }

        // POST: NtqBooks/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            NtqBook ntqBook = db.NtqBooks.Find(id);
            db.NtqBooks.Remove(ntqBook);
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
