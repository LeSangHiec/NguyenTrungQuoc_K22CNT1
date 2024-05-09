using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Quoc0605.Controllers
{
    /// <summary>
    /// Author: Nguyễn Trung Quốc
    /// Class: K22CNT1
    /// </summary>
    public class NtqStudentController : Controller
    {
        // GET: NtqStudent
        public ActionResult Index()
        {
            //Truyền dữ liệu từ controller lên view
            ViewBag.fullName = "Nguyễn Trung Quốc";
            ViewData["Birthday0"] = "25/05/1979";
            TempData["Phone"] = "0369266785";
            return View();
        }

        public ActionResult Details() {
            string ntqStr = "";
            ntqStr += "<h3> Họ và tên: Nguyễn Trung Quốc </h3>";
            ntqStr += "<p> Mã số: 2210900119";
            ntqStr += "<p> Email: trungquock102@gmail.com";
            ViewBag.Details = "";
            return View("chiTiet");
        }
        public ActionResult NgonNguRazor()
        {
            return View();

        }
        // HTMLHelper
        // Get: NtqStudent/AddNewStudent
        public ActionResult AddNewStudent()
        {
            return View();
        }
        [HttpPost]
        public ActionResult AddNewStudent(FormCollection form)
        {
            // lấy dữ liệu trên form
            string fullname = form["fullName"];
            string masv = form["maSv"];
            string Taikhoan = form["TaiKhoan"];
            string MatKhau = form["MatKhau"];

            string ntqStr = "<h3>" + fullname + "</h3>";
            ntqStr += "<p>" + masv;
            ntqStr += "<p>" + Taikhoan;
            ntqStr += "<p>" + MatKhau;

            ViewBag.info = ntqStr;
            return View("Ketqua");
        }
    }
}