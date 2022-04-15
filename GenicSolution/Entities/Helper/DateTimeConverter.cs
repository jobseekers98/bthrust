
using System;
using System.Diagnostics;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace GenicSolution.Entities.Helper
{
    public class DateTimeConverter : JsonConverter<DateTime>
    {
        public override DateTime Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            Debug.Assert(typeToConvert == typeof(DateTime));
            return DateTime.Parse(reader.GetDateTime().ToString());
        }

        public override void Write(Utf8JsonWriter writer, DateTime value, JsonSerializerOptions options)
        {
            writer.WriteStringValue(value.ToString("yyyy'-'MM'-'dd'T'HH':'mm':'ssZ"));
        }
    }
    public class TimeConverter : JsonConverter<TimeSpan>
    {
        public override TimeSpan Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            Debug.Assert(typeToConvert == typeof(TimeSpan));
            return TimeSpan.Parse(reader.GetString());
        }

        public override void Write(Utf8JsonWriter writer, TimeSpan value, JsonSerializerOptions options)
        {
            writer.WriteStringValue(value.ToString());
        }
    }
    public class DecimalConverter : JsonConverter<Decimal>
    {
        public override Decimal Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            Debug.Assert(typeToConvert == typeof(Decimal));
            return Decimal.Parse(reader.GetString());
        }

        public override void Write(Utf8JsonWriter writer, Decimal value, JsonSerializerOptions options)
        {
            writer.WriteStringValue(value.ToString());
        }
    }
    public class IntConverter : JsonConverter<Int32>
    {
        public override Int32 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            Debug.Assert(typeToConvert == typeof(Int32));
            return int.Parse(reader.GetString());
        }

        public override void Write(Utf8JsonWriter writer, Int32 value, JsonSerializerOptions options)
        {
            writer.WriteNumberValue(value);
        }
    }
}
