import styled from "styled-components";

import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import ButtonText from "../../ui/ButtonText";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Tag from "../../ui/Tag";
import BookingDataBox from "./BookingDataBox";

import { HiArrowDownOnSquare, HiArrowUpOnSquare } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useMoveBack } from "../../hooks/useMoveBack";
import Spinner from "../../ui/Spinner";
import { useCheckout } from "../check-in-out/useCheckout";
import { useBooking } from "./useBooking";
import { useDeleteBooking } from "./useDeleteBooking";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Empty from "../../ui/Empty";

const HeadingGroup = styled.div`
    display: flex;
    gap: 2.4rem;
    align-items: center;
`;

function BookingDetail() {
    const { booking, isLoading } = useBooking();
    const { deleteBooking, isDeleting } = useDeleteBooking();
    const { checkout, isCheckingOut } = useCheckout();
    const moveBack = useMoveBack();
    const navigate = useNavigate();
    if (isLoading) return <Spinner />;
    if (!booking) return <Empty resourceName="booking" />;

    const { status, id: bookingId } = booking;

    const statusToTagName = {
        unconfirmed: "blue",
        "checked-in": "green",
        "checked-out": "silver",
    };

    return (
        <>
            <Row type="horizontal">
                <HeadingGroup>
                    <Heading as="h1">Booking #{bookingId}</Heading>
                    <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
                </HeadingGroup>
                <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
            </Row>

            <BookingDataBox booking={booking} />

            <Modal>
                <ButtonGroup>
                    {status === "unconfirmed" && (
                        <Button
                            icon={<HiArrowDownOnSquare />}
                            onClick={() => navigate(`/check-in/${bookingId}`)}
                        >
                            Check in
                        </Button>
                    )}

                    {status === "checked-in" && (
                        <Button
                            icon={<HiArrowUpOnSquare />}
                            onClick={() => {
                                checkout(bookingId);
                            }}
                            disabled={isCheckingOut}
                        >
                            Check out
                        </Button>
                    )}

                    <Modal.Open opens="deleteBooking">
                        <Button variation="danger" disabled={isDeleting}>
                            Delete booking
                        </Button>
                    </Modal.Open>

                    <Button variation="secondary" onClick={moveBack}>
                        Back
                    </Button>
                </ButtonGroup>
                <Modal.Window name="deleteBooking">
                    <ConfirmDelete
                        resourceName="bookings"
                        disabled={isDeleting}
                        onConfirm={() => {
                            deleteBooking(bookingId, {
                                onSettled: () => {
                                    moveBack();
                                },
                            });
                        }}
                    />
                </Modal.Window>
            </Modal>
        </>
    );
}

export default BookingDetail;
