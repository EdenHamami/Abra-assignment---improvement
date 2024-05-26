using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace server.Models
{
    public class Pet
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("name")]
        [Required]
        [StringLength(25, ErrorMessage = "Name can't be longer than 25 characters.")]
        public string Name { get; set; }

        [BsonElement("createdAt")]
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime? CreatedAt { get; set; } = DateTime.Now;

        [BsonElement("color")]
        [Required]
        public string Color { get; set; }

        [BsonElement("age")]
        [Range(0, 20, ErrorMessage = "Age must be between 0 and 20.")]
        public int Age { get; set; }

        [BsonElement("petType")]
        [JsonConverter(typeof(JsonStringEnumConverter))]
        [Required]
        public PetType PetType { get; set; }
    }
}
