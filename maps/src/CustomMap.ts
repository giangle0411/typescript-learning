// This class can be reusable to implement google map location!

// Instructions to every other class
// on how they can be an argument to 'addMaker'
interface Marker {
  location: {
    lat: number
    lng: number
  }
  markerContent(): string
}

// Separated map and limited access to google map
// googleMap property is set to private
// Anywhere else cannot reach to the instances of googleMap
export class CustomMap {
  private googleMap: google.maps.Map

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 2.5,
      center: {
        lat: 0,
        lng: 0,
      },
    })
  }

  // Makes it widely accepted by classes, as long as it fulfill the type Marker
  addMarker(mappable: Marker): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    })

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      })
      infoWindow.open(this.googleMap, marker)
    })
  }
}
