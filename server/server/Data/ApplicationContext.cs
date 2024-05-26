using Microsoft.Extensions.Options;
using MongoDB.Driver;
using server.Configurations;
using server.Models;

namespace server
{
    public class ApplicationContext
    {
        private readonly IMongoDatabase _database;

        public ApplicationContext(IOptions<MongoDBSettings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            _database = client.GetDatabase(settings.Value.DatabaseName);
        }

        public IMongoCollection<Pet> Pets => _database.GetCollection<Pet>("pets");
    }
}
