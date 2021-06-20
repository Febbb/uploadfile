

const model = require("../model/modelUploader");


module.exports={
	index:(request,response)=>{
		model.index((err,result)=>{
			response.json(result);
		});
		// response.render('index');
	},



	store:(request,response)=>{
		if (request.files.image) {
			var size = JSON.parse(request.files.image.size);
			typeFormat = typeof(request.files.image.mimetype);	
			typeSize = typeof(size);

			var type = request.files.image.name.split(".");
			console.log(typeFormat);
			console.log(type[1]);
		

			if (type[1]  == 'png' || type[1] =='jpg' || type[1] == 'jpeg') {
				console.log('format data di terima');
				if ( typeSize == 'number' && size <= 100000 ) {
					if (request.body.data) {
						var data = JSON.parse(request.body.data);
							console.log(data);
							var hargaJual = Number.isSafeInteger(parseInt(data.harga_jual));
							var hargaBeli = Number.isSafeInteger(parseInt(data.harga_beli));
							var stok = Number.isSafeInteger(parseInt(data.stok));
							if (hargaJual,hargaBeli,stok == true) {
									var mv = require('mv');
				     				var oldpath = data.filePath;
				        			this.newpath =  'publik/assets/img/uploads/'+data.filename;
				        			
		       			 			// pindahakan file yang telah di-upload
				       				 mv(oldpath, this.newpath, function (err) {
				       				   if (err) { throw err; }
					          				console.log('file uploaded successfully');
					         				// return response.end("file uploaded successfully");
										
				       				 });
				       				this.newpathSave =  'assets/img/uploads/'+data.filename;
									model.store(data,this.newpathSave,(err,result)=>{
										console.log(result);
										response.json(200);
					
									})
							}
					}else{
						console.log('data tidak di temukan')
						}
				console.log( 'size foto di terima')
				} else {
						console.log('data tidak valid')
						}
			} else {
				console.log('Format data tidak sesuai');
		}
			
		} else {
			response.send('file tidak di temukan');
		}
		// console.log(request.files.image);
		// console.log(request.body.data);
		

  		
  

	},

	update:(request,response)=>{
		// response.json(200);
		// console.log(request.files.image);
		if (request.files.image) {
			var size = JSON.parse(request.files.image.size);
			typeFormat = typeof(request.files.image.mimetype);	
			typeSize = typeof(size);

			var type = request.files.image.name.split(".");
			console.log(typeFormat);
			console.log(type[1]);

			if (type[1]  == 'png' || type[1] =='jpg' || type[1] == 'jpeg') {
				console.log('format data di terima');
				if (typeSize == 'number' && size <= 100000) {
					if (request.body.data) {
						var data = JSON.parse(request.body.data);
							console.log(data);
							// console.log(request.files.image)

							var hargaJual = Number.isSafeInteger(parseInt(data.harga_jual));
							var hargaBeli = Number.isSafeInteger(parseInt(data.harga_beli));
							var stok = Number.isSafeInteger(parseInt(data.stok));
							if (hargaJual,hargaBeli,stok == true) {
								console.log('berhasil bind')
								var mv = require('mv');
				     				var oldpath = data.filePath;

				        			this.newpath =  'publik/assets/img/uploads/'+data.filename;
				        			
		       			 			// pindahakan file yang telah di-upload
				       				 mv(oldpath, this.newpath, function (err) {
				       				   if (err) { throw err; }
				       				   

					          				console.log('file uploaded successfully');
					         				// return response.end("file uploaded successfully");
										
				       				 });

				       				 this.newpathSave =  'assets/img/uploads/'+data.filename;
				       				   model.update(data,this.newpathSave,(err,result)=>{
										
					
									});
				       				
				       				// console.log(data.nama_barang)
				       				// console.log(data.id_barang)
				       				// console.log(data.stok)
				       				// console.log(data.harga_beli)
				       				// console.log(data.harga_jual)
									

							}

					}


				}
			}
			response.json(404);

		} else {
			if (request.body.data) {
				var data = JSON.parse(request.body.data);
				var hargaJual = Number.isSafeInteger(parseInt(data.harga_jual));
				var hargaBeli = Number.isSafeInteger(parseInt(data.harga_beli));
				var stok = Number.isSafeInteger(parseInt(data.stok));
					if (hargaJual,hargaBeli,stok == true) {
						model.update(data,newpath,(err,result)=>{
					

						})

				}
				
			}
		}
		
	},

	destroy:(request,response)=> {
		console.log(request.body.id_barang)
		model.destroy(request.body.id_barang,(err,result)=>{
			console.log(result);
			response.json(200);

		})
		
	}
}