using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactRouterPeople.Data;
using ReactRouterPeople.Web.Models;

namespace ReactRouterPeople.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private string _connectionString;

        public PeopleController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("add")]
        public Person Add(Person person)
        {
            var repo = new PeopleRepository(_connectionString);
            repo.Add(person);
            return person;
        }

        [HttpGet]
        [Route("get")]
        public IEnumerable<Person> GetPeople()
        {
            var repo = new PeopleRepository(_connectionString);
            return repo.GetPeople();
        }

        [HttpPost]
        [Route("delete")]
        public void DeleteMany(DeleteViewModel dvm)
        {
            var repo = new PeopleRepository(_connectionString);
            repo.DeleteMany(dvm.PersonIds);
        }

        [HttpGet]
        [Route("getbyid/{id}")]
        public Person GetById(int id)
        {
            var repo = new PeopleRepository(_connectionString);
            return repo.GetById(id);
        }

        [HttpPost]
        [Route("update")]
        public void Update(Person person)
        {
            var repo = new PeopleRepository(_connectionString);
            repo.Update(person);
        }
    }
}