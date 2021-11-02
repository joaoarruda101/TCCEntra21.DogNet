using DogNet.Models;
using Microsoft.Data.Sqlite;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace DogNet.Controllers
{
    public static class FrontSupport
    {
        public static List<Models.Instituicoes> SelectInfoInst()
        {

            using var con = new SqliteConnection("Filename=./dados.db");
            con.Open();
            string stm = "SELECT * FROM Instituicoes";

            using var cmd = new SqliteCommand(stm, con);
            using SqliteDataReader rdr = cmd.ExecuteReader();

            List<Instituicoes> inst = new List<Instituicoes>();

            while (rdr.Read())
            {
                Instituicoes vwInst = new Instituicoes();
                vwInst.Nome = rdr.GetString(2);
                vwInst.Description = rdr.GetString(1);
                vwInst.Telefone = rdr.GetString(5);
                vwInst.Email = rdr.GetString(6);
                inst.Add(vwInst);
            }

            con.Close();
            return inst;

        }
    }
}
