using Quoc1305.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Quoc1305.Controllers
{
    public class CustomerController : Controller
    {
        static CustomerRepository listCustomer;
        public CustomerController()
        {
            listCustomer = new CustomerRepository();
        }
        // GET: /Customer/GetCustomers
        public ActionResult GetCustomers()
        {
            return View(listCustomer.GetCustomers());
        }
        //POST: /Customer/GetCustomers
        [HttpPost]
        public ActionResult GetCustomers(string name)
        {
            return View(listCustomer.SearchCustomer(name));
        }
        // GET: /Customer/Details/5
        public ActionResult Details(string id)
        {
            return View(listCustomer.GetCustomer(id));
        }
        // GET: /Customer/Create
        public ActionResult Create()
        {
            return View();
        }
        // POST: /Customer/Create
        [HttpPost]
        public ActionResult Create(Customer cus)
        {
            listCustomer.AddCustomer(cus);
            return RedirectToAction("GetCustomers");
        }
        // GET: /Customer/Edit/5
        public ActionResult Edit(string id)
        {
            return View(listCustomer.GetCustomer(id));
        }
        // POST: /Customer/Edit
        [HttpPost]
        public ActionResult Edit(Customer cus)
        {
            listCustomer.UpdateCustomer(cus);
            return RedirectToAction("GetCustomers");
        }
        // GET: /Customer/Delete/5
        public ActionResult Delete(string id)
        {
            listCustomer.DeleteCustomer(listCustomer.GetCustomer(id));
            return RedirectToAction("GetCustomers");
        }
    

    public ActionResult CustomerDetail()
        {
            //tạo một đối tượng Customer ( nhớ using Lab04.Models vào nhé)
            Customer cus = new Customer()
            {
                CustomerId = "KH001",
                FullName = "Nguyễn Trung Quốc",
                Address = "Hà Nội",
                Email = "trungquock102@gmail.com",
                Phone = "0868584360",
                Balance = 15200000
            };
            //cách 1 gán dữ liệu vào ViewBag để chuyển tới View
            //ViewBag.customer = cus;
            //return View();
            //có thể truyền dữ liệu qua đối tượng model để chuyển tới View
            return View(cus);
        }
        //GET /Product/CustomerList (action trả về danh sách khách hàng cho view CustomerList)
        public ActionResult CustomerList()
        {
            //tạo một danh sách khách hàng
            List<Customer> listcustomer = new List<Customer>(){
            new Customer(){ CustomerId = "KH001",
            FullName = "Nguyễn Trung Quốc1",
            Address = "Hà Nội",Email = "trungquock102@gmail.com",
            Phone = "0868584360",Balance = 15200000},
            new Customer(){ CustomerId = "KH002",
            FullName = "Nguyễn Trung Quốc2",
            Address = "Hà Nội",Email = "trungquock102@gmail.com",
            Phone = "0868584360",Balance = 15200000},
            new Customer(){ CustomerId = "KH003",
            FullName = "Nguyễn Trung Quốc3",
            Address = "Hà Nội",Email = "trungquock102@gmail.com",
            Phone = "0868584360",Balance = 15200000},
            new Customer(){ CustomerId = "KH004",
            FullName = "Nguyễn Trung Quốc4",
            Address = "Hà Nội",Email = "trungquock102@gmail.com",
            Phone = "0868584360",Balance = 15200000},
        };
            //gán dữ liệu vào ViewBag để chuyển qua View
            ViewBag.listcustomer = listcustomer;
            return View();
        }
    }
 }

