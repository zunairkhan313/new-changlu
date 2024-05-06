import Image from "next/image"
import product from "../../public/Images/Product_Bg_Image.jpg"
import tools from '../../public/Images/Slider-Img-7.jpg'
import socket from '../../public/Images/Catalog-Img-4.jpg'
import driver from '../../public/Images/Slider-Img-3.jpg'
import wrench from '../../public/Images/wrench-series.jpg'
import pliers from '../../public/Images/Catalog-Img-5.jpg'
// import cutting from '../../public/Images/cutting.jpg'
import triming from '../../public/Images/triming.jpg'
import measuring from '../../public/Images/measuring.jpg'

export default function Product() {
    return (
        <>
            <div>
                <div className="col-lg-12 relative lg:h-2/3 md:h-2/3 bg-blend-darken">

                    <Image

                        style={{ "height": "420px", "width": "100%", "filter": "brightness(25%)" }}
                        className="img-fluid"
                        src={product}
                        alt="product"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                        <div className="lg:text-6xl font-extrabold tracking-wider bgVideoText ">
                            <h1 className="heading text-white font-bold">Home | Products</h1>

                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    {/* <div className="mt-5 w-[600px] h-[300px]">

          <CardSliderCarousel />
          
        </div> */}
                    <h1 className="font-bold text-4xl text-center italic">OUR <span className="text-green-800">PRODUCTS</span></h1>
                    <div className="flex flex-wrap justify-around">
                        <div style={{ "height": "100%", "width": 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>

                                <Image
                                    style={{ "height": "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    src={tools}
                                    alt={"tshirts"}
                                />
                            </div>
                            <div className='mt-4'>
                                <h4 className='text-3xl text-center font-bold tracking-wider'>Tools Set</h4>
                                <br />
                            </div>
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                            <div>
                                    <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button type="button" class="text-green-800 hover:bg-green-800 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>

                        </div>


                        <div style={{ "height": "100%", "width": 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>

                                <Image
                                    style={{ "height": "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    src={socket}
                                    alt={"tshirts"}
                                />
                            </div>
                            <div className='mt-4'>
                                <h4 className='text-3xl text-center font-bold tracking-wider'>Sockets Series</h4>
                                <br />

                            </div>
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                            <div>
                                    <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button type="button" class="text-green-800 hover:bg-green-800 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>
                        </div>


                        <div style={{ "height": "100%", "width": 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>

                                <Image
                                    style={{ "height": "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    src={driver}
                                    alt={"tshirts"}
                                />
                            </div>
                            <div className='mt-3'>
                                <h4 className='text-3xl text-center font-bold tracking-wider'>Screwdriver Series</h4>
                            </div>
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                            <div>
                                    <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button type="button" class="text-green-800 hover:bg-green-800 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>
                        </div>


                        <div style={{ "height": "100%", "width": 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>

                                <Image
                                    style={{ "height": "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    src={wrench}
                                    alt={"tshirts"}
                                />
                            </div>
                            <div className='mt-4'>
                                <h4 className='text-3xl text-center font-bold tracking-wider'>Wrench Series</h4>
                                <br />
                            </div>
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                            <div>
                                    <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button type="button" class="text-green-800 hover:bg-green-800 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>
                        </div>


                        <div style={{ "height": "100%", "width": 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>

                                <Image
                                    style={{ "height": "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    src={pliers}
                                    alt={"tshirts"}
                                />
                            </div>
                            <div className='mt-4'>
                                <h4 className='text-3xl text-center font-bold tracking-wider'>Pliers Series</h4>
                                <br />
                            </div>
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                            <div>
                                    <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button type="button" class="text-green-800 hover:bg-green-800 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>
                        </div>


                        <div style={{ "height": "100%", "width": 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>

                                <Image
                                    style={{ "height": "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    src={measuring}
                                    alt={"tshirts"}
                                />
                            </div>
                            <div className='mt-3'>
                                <h4 className='text-3xl text-center font-bold tracking-wider'>Cutting Tools Series</h4>
                            </div>
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                            <div>
                                    <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button type="button" class="text-green-800 hover:bg-green-800 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>
                        </div>


                        <div style={{ "height": "100%", "width": 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>

                                <Image
                                    style={{ "height": "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    src={triming}
                                    alt={"tshirts"}
                                />
                            </div>
                            <div className='mt-3'>
                                <h4 className='text-3xl text-center font-bold tracking-wider'>Knocking Trimming Tools</h4>
                            </div>
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                            <div>
                                    <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button type="button" class="text-green-800 hover:bg-green-800 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>
                        </div>


                        <div style={{ "height": "100%", "width": 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>

                                <Image
                                    style={{ "height": "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    src={measuring}
                                    alt={"tshirts"}
                                />
                            </div>
                            <div className='mt-4'>
                                <h4 className='text-3xl text-center font-bold tracking-wider'>Measuring Tools</h4>
                            </div>
                            <br />
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                                <div>
                                    <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button type="button" class="text-green-800 hover:bg-green-800 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}