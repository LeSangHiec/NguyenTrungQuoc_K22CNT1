using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Quoc1305.Models
{
    public class CustomerRepository : ICustomerRepository
    {
        //khởi tạo danh sách khách hàng
        static readonly List<Customer> data = new List<Customer>()
        {
            new Customer(){
            CustomerId = "KH003",
            FullName = "Nguyễn Trung Quốc",
            Address = "Hà Nội",
            Email = "trungquoc@gmail.com",
            Phone = "56789JQK",
            Balance = 9999999},
           new Customer(){
            CustomerId = "KH003",
            FullName = "Nguyễn Trung Quốc",
            Address = "Hà Nội",
            Email = "trungquoc@gmail.com",
            Phone = "56789JQK",
            Balance = 9999999},
           new Customer(){
            CustomerId = "KH003",
            FullName = "Nguyễn Trung Quốc",
            Address = "Hà Nội",
            Email = "trungquoc@gmail.com",
            Phone = "56789JQK",
            Balance = 9999999},
           new Customer(){
            CustomerId = "KH003",
            FullName = "Nguyễn Trung Quốc",
            Address = "Hà Nội",
            Email = "trungquoc@gmail.com",
            Phone = "56789JQK",
            Balance = 9999999},
        };
        //thực thi phương thức lấy danh sách khách hàng
        public IList<Customer> GetCustomers()
        {
            return data;
        }
        //thực thi phương thức tìm khách hàng theo tên
        public IList<Customer> SearchCustomer(string name)
        {
            return data.Where(c => c.FullName.EndsWith(name)).ToList();
        }
        //thực thi phương thức lấy khách hàng theo Id
        public Customer GetCustomer(string customerId)
        {
            return data.FirstOrDefault(c => c.CustomerId.Equals(customerId));
        }
        //thực thi phương thức thêm khách hàng
        public void AddCustomer(Customer cus)
        {
            data.Add(cus);
        }
        //thực thi phương thức cập nhật khách hàng
        public void UpdateCustomer(Customer cus)
        {
            //lấy khách hàng theo id
            var customer = data.FirstOrDefault(c =>
            c.CustomerId.Equals(cus.CustomerId));
            //nếu có thì sửa thông tin
            if (customer != null)
            {
                customer.FullName = cus.FullName;
                customer.Address = cus.Address;
                customer.Email = cus.Email;
                customer.Phone = cus.Phone;
                customer.Balance = cus.Balance;
            }
        }

        //thực thi phương thức xóa khách hàng
        public void DeleteCustomer(Customer cus)
        {
            data.Remove(cus);
        }
    }
}