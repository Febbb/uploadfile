const db = require("../config/db");

module.exports={

	index:(callback)=>{
		db.query(`SELECT * FROM tabel_barang`,callback);
	},

	store:(body,newpath,callback)=>{
		db.query(`INSERT INTO tabel_barang SET
					nama_barang = '${body.nama_barang}',
					harga_jual = '${body.harga_jual}',
					harga_beli = '${body.harga_beli}',
					stok = '${body.stok}',
					path_barang = '${newpath}',
					created_at = now(),
					updated_at =now()`,callback);
	},

	update:(body,newpath,callback)=>{
		db.query(`

				UPDATE tabel_barang SET 
				nama_barang = '${body.nama_barang}',
				harga_jual = '${body.harga_jual}',
				harga_beli = '${body.harga_beli}',
				stok = '${body.stok}',
				path_barang = '${newpath}',
				updated_at=now() WHERE id_barang = '${body.id_barang}'


			`,callback);
		
	},

	destroy:(id,callback)=>{
		db.query(`DELETE FROM tabel_barang WHERE id_barang = ${id}  `,callback);
	},

}