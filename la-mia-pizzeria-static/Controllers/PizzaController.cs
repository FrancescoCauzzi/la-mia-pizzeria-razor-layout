using Microsoft.AspNetCore.Mvc;
using la_mia_pizzeria_static.Models;
using System.Collections.Generic;
using Bogus;


namespace la_mia_pizzeria_static.Controllers
{
    public class PizzaController : Controller
    {
        //[Route("Home/")]
        public IActionResult Index()
        {
            // Generate a list of fake pizzas
            var faker = new Faker<Pizza>()
                .RuleFor(p => p.Id, f => f.Random.Int(1, 100))
                .RuleFor(p => p.Name, f => f.Random.Word())
                .RuleFor(p => p.Description, f => f.Lorem.Sentence())
                .RuleFor(p => p.Price, f => Math.Round((Decimal)f.Random.Double(5, 20), 2));

            List<Pizza> pizzas = faker.Generate(10);  // Generate 10 fake pizzas

            // Pass the list of pizzas to the View
            return View(pizzas);
        }
    }
}
