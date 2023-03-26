function make_album(artist: string, album_title: string, num_tracks?: number): Record<string, any> {
  const album:{album_title:string,artist:string,num_tracks?:number} = {
    album_title: album_title,
    artist: artist,
  };
  if (num_tracks) {
    album.num_tracks= num_tracks;
  }
  return album;
}

const album1 = make_album("Album_A", "Artist_A");
const album2 = make_album("Album_B", "Artist_B", 16);
const album3 = make_album("Album_C", "Artist_C", 12);

console.log(album1);
console.log(album2);
console.log(album3);
