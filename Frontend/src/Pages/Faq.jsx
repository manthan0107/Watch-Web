import Bg from "../Components/Bg";
import Header from "../Components/Header";
import React from 'react';
import { Collapse } from 'antd';

const Faq = () => {

    const titleData = { name: "Faqs", path: "Faqs" };

    const items = [
        {
            key: '1',
            label: <div className="custom-label jost">How long does it take for home delivery?</div>,
            children: <p className="custom-content jost">We use Royal mail and DHL to send most of our UK orders. Euro Car Parts reserves the right to use discretion in any circumstance where it makes more sense to use an alternative delivery method.</p>,
        },
        {
            key: '2',
            label: <div className="custom-label jost">What courier do you use for deliveries?</div>,
            children: <p className="custom-content jost">We use Royal mail and DHL to send most of our UK orders. Euro Car Parts reserves the right to use discretion in any circumstance where it makes more sense to use an alternative delivery method.</p>,
        },
        {
            key: '3',
            label: <div className="custom-label jost">Why am I being charged for delivery on my order when it states standard delivery is free?</div>,
            children: <p className="custom-content jost">All our delivery charges are pre-set by our courier company. We sell some oversized items which require a specialist courier company to fulfil the delivery, there is an additional charge for these. Also, our courier company consider some surcharge postcodes ‘Out of area’. There is an additional charge for these also.</p>,
        },
        {
            key: '4',
            label: <div className="custom-label jost">I haven’t received a dispatch email/email confirmation?</div>,
            children: <p className="custom-content jost">Please be aware an automated email is sent to the given email address when your order is dispatched. Please check all folders including your junk folder as it will come from a noreply email address.</p>,
        },
        {
            key: '5',
            label: <div className="custom-label jost">Why does it not tell us on the website that the parts will be delivered by the branch?</div>,
            children: <p className="custom-content jost">Due to the delicacy of some parts we take extra care in the delivery of the item. These could include body panels and large bulky items.</p>,
        },
        {
            key: '6',
            label: <div className="custom-label jost">Can I collect from a local store?</div>,
            children: <p className="custom-content jost">We offer a reserve and collect service. This is available on the checkout page. If the product is not available in a local store, you are unable to reserve it.</p>,
        },
        {
            key: '7',
            label: <div className="custom-label jost">Do you deliver on Weekend?</div>,
            children: <p className="custom-content jost">No, our courier company does not currently offer weekend delivery.</p>,
        },
        {
            key: '8',
            label: <div className="custom-label jost">Can you confirm you have received my return?</div>,
            children: <p className="custom-content jost">We aim to process returns within 5-7 working days. You will be notified by email once the return is complete. Use your shipping reference to track the return.</p>,
        },
        {
            key: '9',
            label: <div className="custom-label jost">How long will it be before I get a refund?</div>,
            children: <p className="custom-content jost">Once we receive your item(s), our returns team will inspect them and an automated refund is triggered. This takes 5-7 working days.</p>,
        },
        {
            key: '10',
            label: <div className="custom-label jost">Who pays for return postage?</div>,
            children: <p className="custom-content jost">If you are returning an unsuitable item, we refund the item cost only. For faulty items, we refund both item and delivery charges.</p>,
        },
        {
            key: '11',
            label: <div className="custom-label jost">Why have you not refunded the original delivery charge?</div>,
            children: <p className="custom-content jost">Unsuitable item returns only get item cost refunded. Faulty item returns get full delivery and item refund.</p>,
        },
        {
            key: '12',
            label: <div className="custom-label jost">Do you offer a VAT discount to non EU customers?</div>,
            children: <p className="custom-content jost">Non-EU customers can contact us with their order reference to remove VAT from their order.</p>,
        }
    ];

    return (
        <>
            <div className="faq">
                <Header />
                <Bg title={titleData.name} path={titleData.path} />

                <div className="faq-content">
                    <div className="container">
                        <div className="row mb-4 d-flex justify-content-center">
                            <div className="col-12 col-sm-8 col-lg-5 text-center">
                                <h6 className="jost text-uppercase">ask us anything</h6>
                                <h1 className="mont text-capitalize">frequently asked questions</h1>
                            </div>
                        </div>

                        <Collapse accordion items={items} expandIconPosition="end" />
                    </div>
                </div>

                <div className="offer">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-12 col-md-10 col-lg-8 col-xl-6 col-xxl-5 d-flex flex-column text-center">
                                <h3 className="mont">Never miss our updates about new arrivals and special offers</h3>
                                <div className="jost sub">Get the latest news & updates</div>
                                <input className="jost mt-4" type="email" placeholder="Enter Youe Email..." />
                                <button className="jost mt-4 text-uppercase"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq;
