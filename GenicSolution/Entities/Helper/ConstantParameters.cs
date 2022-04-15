using System.Collections.Generic;
using System.ComponentModel;
using System.Data;


namespace GenicSolution.Entities.Helper
{
    public static class ConstantParameters
    {
        public const string NULL_GUID_STRING = "00000000-0000-0000-0000-000000000000";
        public const string CUSTOMER_DEFAULT_PASSWORD = "Cust@1234";
        public static DataTable ToDataTable<T>(this List<T> data)
        {
            PropertyDescriptorCollection props = TypeDescriptor.GetProperties(typeof(T));
            DataTable table = new DataTable();
            for (int i = 0; i < props.Count; i++)
            {
                PropertyDescriptor prop = props[i];
                table.Columns.Add(prop.Name, prop.PropertyType);
            }
            object[] values = new object[props.Count];
            foreach (T item in data)
            {
                for (int i = 0; i < values.Length; i++)
                {
                    values[i] = props[i].GetValue(item);
                }
                table.Rows.Add(values);
            }
            return table;
        }
    }
}
