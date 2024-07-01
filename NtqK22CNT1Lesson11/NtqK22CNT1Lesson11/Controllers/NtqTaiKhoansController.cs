using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using NtqK22CNT1Lesson11.Models;
using NtqK22CNT1Lesson11.ModelViews;

namespace NtqK22CNT1Lesson11.Controllers
{
    public class NtqTaiKhoansController : Controller
    {
        private NtqLesson11DbsEntities db = new NtqLesson11DbsEntities();

        // GET: NtqTaiKhoans
        public ActionResult Index()
        {
            return View(db.NtqTaiKhoan.ToList());
        }

        // GET: NtqTaiKhoans/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            NtqTaiKhoan ntqTaiKhoan = db.NtqTaiKhoan.Find(id);
            if (ntqTaiKhoan == null)
            {
                return HttpNotFound();
            }
            return View(ntqTaiKhoan);
        }

        // GET: NtqTaiKhoans/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: NtqTaiKhoans/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "NtqId,NtqUserName,NtqPassword,NtqFullName,NtqAge,NtqEmail,NtqPhone,NtqStatus")] NtqTaiKhoan ntqTaiKhoan)
        {
            if (ModelState.IsValid)
            {
                db.NtqTaiKhoan.Add(ntqTaiKhoan);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(ntqTaiKhoan);
        }

        // GET: NtqTaiKhoans/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            NtqTaiKhoan ntqTaiKhoan = db.NtqTaiKhoan.Find(id);
            if (ntqTaiKhoan == null)
            {
                return HttpNotFound();
            }
            return View(ntqTaiKhoan);
        }

        // POST: NtqTaiKhoans/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "NtqId,NtqUserName,NtqPassword,NtqFullName,NtqAge,NtqEmail,NtqPhone,NtqStatus")] NtqTaiKhoan ntqTaiKhoan)
        {
            if (ModelState.IsValid)
            {
                db.Entry(ntqTaiKhoan).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(ntqTaiKhoan);
        }

        // GET: NtqTaiKhoans/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            NtqTaiKhoan ntqTaiKhoan = db.NtqTaiKhoan.Find(id);
            if (ntqTaiKhoan == null)
            {
                return HttpNotFound();
            }
            return View(ntqTaiKhoan);
        }

        // POST: NtqTaiKhoans/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            NtqTaiKhoan ntqTaiKhoan = db.NtqTaiKhoan.Find(id);
            db.NtqTaiKhoan.Remove(ntqTaiKhoan);
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

        // Form đăng nhập hệ thống
        public ActionResult NtqLogin()
        {
            var ntqModel = new NtqLoginModel();
            return View(ntqModel);
        }

        [HttpPost]
        public ActionResult NtqLogin(NtqLoginModel ntqModel)
        {
            // khi người dùng nhấn nút đăng nhập; xử lý và tìm kiến, so sanh trong db

            var ntqCheckLogin = db.NtqTaiKhoan.Where(x => x.NtqUserName.Equals(ntqModel.NtqUserName) && x.NtqPassword.Equals(ntqModel.NtqPassword)).FirstOrDefault();
            if(ntqCheckLogin != null)
            {
                //Lưu trữ session
                Session["NtqMember"] = ntqCheckLogin;

                return Redirect("/");
            }
            return View(ntqModel);
        }
        public ActionResult Logout()
        {
            Session.Remove("NtqMember");
            return Redirect("/");
        }
    }
}
