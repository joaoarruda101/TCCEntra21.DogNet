using System;

namespace DogNet.Services.Exceptions
{
    public class DBConcurrencyException : ApplicationException
    {
        public DBConcurrencyException (string message): base(message)
        {

        }

    }
}
