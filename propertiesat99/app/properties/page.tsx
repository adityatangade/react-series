"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search, MapPin, Home, Star, Filter, Heart, Share2, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data matching your structure
const properties = [
  {
    id: 1,
    name: "Ocean View Apartment",
    type: "FLAT",
    rent: 25000,
    locationUrl: "https://goo.gl/maps/example",
    addressId: 1,
    gender: "ANY",
    furnish: "FURNISHED",
    imageUrls: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    address: {
      id: 1,
      street: "123 Seaside Drive",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
    },
    amenities: ["WiFi", "AC", "Parking", "Security"],
    rating: 4.8,
    reviews: 24,
  },
  {
    id: 2,
    name: "Cozy Studio Near Metro",
    type: "STUDIO",
    rent: 18000,
    locationUrl: "https://goo.gl/maps/example2",
    addressId: 2,
    gender: "FEMALE",
    furnish: "SEMI_FURNISHED",
    imageUrls: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
    address: {
      id: 2,
      street: "456 Metro Lane",
      city: "Delhi",
      state: "Delhi",
      country: "India",
    },
    amenities: ["WiFi", "Kitchen", "Laundry"],
    rating: 4.6,
    reviews: 18,
  },
  {
    id: 3,
    name: "Spacious 2BHK",
    type: "FLAT",
    rent: 35000,
    locationUrl: "https://goo.gl/maps/example3",
    addressId: 3,
    gender: "ANY",
    furnish: "FURNISHED",
    imageUrls: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    address: {
      id: 3,
      street: "789 Garden Street",
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
    },
    amenities: ["WiFi", "AC", "Gym", "Pool", "Parking"],
    rating: 4.9,
    reviews: 32,
  },
  {
    id: 4,
    name: "Modern PG for Working Professionals",
    type: "PG",
    rent: 12000,
    locationUrl: "https://goo.gl/maps/example4",
    addressId: 4,
    gender: "MALE",
    furnish: "FURNISHED",
    imageUrls: ["/placeholder.svg?height=300&width=400"],
    address: {
      id: 4,
      street: "321 Tech Park Road",
      city: "Pune",
      state: "Maharashtra",
      country: "India",
    },
    amenities: ["WiFi", "Meals", "Laundry", "Security"],
    rating: 4.4,
    reviews: 15,
  },
  {
    id: 5,
    name: "Luxury Villa Room",
    type: "ROOM",
    rent: 28000,
    locationUrl: "https://goo.gl/maps/example5",
    addressId: 5,
    gender: "ANY",
    furnish: "FURNISHED",
    imageUrls: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
    address: {
      id: 5,
      street: "555 Luxury Lane",
      city: "Gurgaon",
      state: "Haryana",
      country: "India",
    },
    amenities: ["WiFi", "AC", "Pool", "Gym", "Garden", "Parking"],
    rating: 4.7,
    reviews: 28,
  },
  {
    id: 6,
    name: "Budget Friendly Shared Room",
    type: "SHARED",
    rent: 8000,
    locationUrl: "https://goo.gl/maps/example6",
    addressId: 6,
    gender: "FEMALE",
    furnish: "SEMI_FURNISHED",
    imageUrls: ["/placeholder.svg?height=300&width=400"],
    address: {
      id: 6,
      street: "777 Student Street",
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
    },
    amenities: ["WiFi", "Kitchen", "Study Area"],
    rating: 4.2,
    reviews: 12,
  },
]

export default function PropertiesPage() {
  const [filteredProperties, setFilteredProperties] = useState(properties)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedGender, setSelectedGender] = useState("all")
  const [selectedFurnish, setSelectedFurnish] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 50000])
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = () => {
    let filtered = properties

    if (searchTerm) {
      filtered = filtered.filter(
        (property) =>
          property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.address.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.address.state.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedType !== "all") {
      filtered = filtered.filter((property) => property.type === selectedType)
    }

    if (selectedGender !== "all") {
      filtered = filtered.filter((property) => property.gender === selectedGender || property.gender === "ANY")
    }

    if (selectedFurnish !== "all") {
      filtered = filtered.filter((property) => property.furnish === selectedFurnish)
    }

    filtered = filtered.filter((property) => property.rent >= priceRange[0] && property.rent <= priceRange[1])

    setFilteredProperties(filtered)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">RoomFinder</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/properties" className="text-blue-600 font-medium">
              Properties
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Sign In</Button>
            <Button>List Property</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search by location, property name..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button onClick={handleSearch} className="lg:w-auto">
              Search
            </Button>
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="lg:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t">
              <div>
                <label className="text-sm font-medium mb-2 block">Property Type</label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="FLAT">Flat</SelectItem>
                    <SelectItem value="STUDIO">Studio</SelectItem>
                    <SelectItem value="ROOM">Room</SelectItem>
                    <SelectItem value="PG">PG</SelectItem>
                    <SelectItem value="SHARED">Shared</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Gender Preference</label>
                <Select value={selectedGender} onValueChange={setSelectedGender}>
                  <SelectTrigger>
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="MALE">Male</SelectItem>
                    <SelectItem value="FEMALE">Female</SelectItem>
                    <SelectItem value="ANY">Any</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Furnishing</label>
                <Select value={selectedFurnish} onValueChange={setSelectedFurnish}>
                  <SelectTrigger>
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="FURNISHED">Furnished</SelectItem>
                    <SelectItem value="SEMI_FURNISHED">Semi Furnished</SelectItem>
                    <SelectItem value="UNFURNISHED">Unfurnished</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                </label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={50000}
                  min={0}
                  step={1000}
                  className="mt-2"
                />
              </div>
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{filteredProperties.length} Properties Found</h1>
          <Select defaultValue="newest">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src={property.imageUrls[0] || "/placeholder.svg"}
                  alt={property.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-blue-600">{property.type}</Badge>
                  <Badge
                    variant={property.gender === "ANY" ? "secondary" : "outline"}
                    className="bg-white text-gray-700"
                  >
                    {property.gender === "ANY" ? "All" : property.gender}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold">{property.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">
                      {property.rating} ({property.reviews})
                    </span>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span className="text-sm">
                    {property.address.street}, {property.address.city}, {property.address.state}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline">{property.furnish.replace("_", " ")}</Badge>
                  {property.amenities.slice(0, 2).map((amenity) => (
                    <Badge key={amenity} variant="secondary" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                  {property.amenities.length > 2 && (
                    <Badge variant="secondary" className="text-xs">
                      +{property.amenities.length - 2} more
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">₹{property.rent.toLocaleString()}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => window.open(property.locationUrl, "_blank")}>
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm">View Details</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Home className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Properties Found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters to find more properties.</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedType("all")
                setSelectedGender("all")
                setSelectedFurnish("all")
                setPriceRange([0, 50000])
                setFilteredProperties(properties)
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
