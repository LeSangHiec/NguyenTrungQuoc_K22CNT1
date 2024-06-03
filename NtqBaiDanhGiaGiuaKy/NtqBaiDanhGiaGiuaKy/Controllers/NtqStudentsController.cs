using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NtqBaiDanhGiaGiuaKy.Models;

namespace NtqBaiDanhGiaGiuaKy.Controllers
{
    public class NtqStudentsController : Controller
    {
        private static List<NtqStudent> ntqStudents = new List<NtqStudent>
        {
            new NtqStudent { Id = 0, Name = "Quốc", Image = "imageA.jpg", Quantity = 10, Price = 100, IsActive = true },
            new NtqStudent { Id = 1, Name = "Quắc", Image = "imageB.jpg", Quantity = 20, Price = 200, IsActive = true }
        };


        public ActionResult Index()
        {
            return View(ntqStudents);
        }


        public ActionResult Create()
        {
            return View(new NtqStudent());
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(NtqStudent ntqProduct)
        {
            if (ModelState.IsValid)
            {
                ntqProduct.Id = ntqStudents.Any() ? ntqStudents.Max(p => p.Id) + 1 : 0;
                ntqStudents.Add(ntqProduct);
                return RedirectToAction("Index");
            }

            return View(ntqProduct);
        }


        public ActionResult Edit(int id)
        {
            var ntqProduct = ntqStudents.FirstOrDefault(p => p.Id == id);
            if (ntqProduct == null)
            {
                return HttpNotFound();
            }
            return View(ntqProduct);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(NtqStudent ntqProduct)
        {
            if (ModelState.IsValid)
            {
                var existingProduct = ntqStudents.FirstOrDefault(p => p.Id == ntqProduct.Id);
                if (existingProduct != null)
                {
                    existingProduct.Name = ntqProduct.Name;
                    existingProduct.Image = ntqProduct.Image;
                    existingProduct.Quantity = ntqProduct.Quantity;
                    existingProduct.Price = ntqProduct.Price;
                    existingProduct.IsActive = ntqProduct.IsActive;
                }
                return RedirectToAction("Index");
            }

            return View(ntqProduct);
        }


        public ActionResult Delete(int id)
        {
            var ntqProduct = ntqStudents.FirstOrDefault(p => p.Id == id);
            if (ntqProduct == null)
            {
                return HttpNotFound();
            }
            return View(ntqProduct);
        }


        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            var ntqProduct = ntqStudents.FirstOrDefault(p => p.Id == id);
            if (ntqProduct != null)
            {
                ntqStudents.Remove(ntqProduct);
            }
            return RedirectToAction("Index");
        }


    }
}