using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace ReactRouterPeople.Data
{
    public class PeopleRepository
    {
        private string _connectionString;

        public PeopleRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public IEnumerable<Person> GetPeople()
        {
            using (var context = new PeopleContext(_connectionString))
            {
                return context.People.ToList();
            }
        }

        public void Add(Person person)
        {
            using (var context = new PeopleContext(_connectionString))
            {
                context.People.Add(person);
                context.SaveChanges();
            }
        }

        public void DeleteMany(IEnumerable<int> ids)
        {
            using (var context = new PeopleContext(_connectionString))
            {
                var people = ids.Select(i => new Person { Id = i });
                context.People.RemoveRange(people);
                context.SaveChanges();
            }
        }

        public Person GetById(int id)
        {
            using (var context = new PeopleContext(_connectionString))
            {
                return context.People.FirstOrDefault(p => p.Id == id);
            }
        }

        public void Update(Person person)
        {
            using (var context = new PeopleContext(_connectionString))
            {
                context.People.Attach(person);
                context.Entry(person).State = EntityState.Modified;
                context.SaveChanges();
            }
        }
    }
}