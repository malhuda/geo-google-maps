/**
 *  Get Distance dua address yang berbeda
 * 
 *  Script By : M. Alhuda ( Universitas Lancang Kuning )
 *  Script Created Time : 18/06/21 15:31:10 WIB
 * @customfunction
 */
function GOOGLEMAPS(alamat_tinggal, alamat_sekolah_tujuan, type_penampilan) {
  //alamat_tinggal = "Jl. Herkules, Tuah Karya, Kec. Tampan, Kota Pekanbaru, Riau 28293, Indonesia";
 //alamat_sekolah_tujuan = "SMA NEGERI 8 PEKANBARU";

  var mapObj = Maps.newDirectionFinder();
  mapObj.setOrigin(alamat_tinggal);
  mapObj.setDestination(alamat_sekolah_tujuan);
  var directions = mapObj.getDirections();

  var getTheLeg = directions["routes"][0]["legs"][0];
  var meters = getTheLeg["distance"]["value"];
  //Logger.log(meters / 1000);

  switch(type_penampilan){
    case "miles":
    return meters * 0.000621371;
    break;
    case "minutes":
    var duration = getTheLeg["duration"]["value"];
    return duration / 60;
    break;
    case "kilometers":
    return meters / 1000;
    break;
    default:
    return "Error Unit Type";
  }
}
