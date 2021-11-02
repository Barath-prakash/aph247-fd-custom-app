import { gql } from 'graphql-tag';

export const GET_MEDICINE_ORDER_OMS_DETAILS_WITH_ADDRESS = gql`
  query getMedicineOrderOMSDetailsWithAddress($patientId: String, $orderAutoId: Int, $billNumber: String) {
    getMedicineOrderOMSDetailsWithAddress(patientId: $patientId, orderAutoId: $orderAutoId, billNumber: $billNumber) {
      medicineOrderDetails {
        id
        totalCashBack
        createdDate
        orderAutoId
        billNumber
        coupon
        devliveryCharges
        prismPrescriptionFileId
        couponDiscount
        productDiscount
        redeemedAmount
        estimatedAmount
        prescriptionImageUrl
        orderTat
        orderType
        shopAddress
        packagingCharges
        deliveryType
        currentStatus
        patientAddressId
        alertStore
        medicineOrderLineItems {
          medicineSKU
          medicineName
          price
          mrp
          quantity
          isMedicine
          mou
          isPrescriptionNeeded
        }
        medicineOrderPayments {
          id
          paymentType
          amountPaid
          paymentRefId
          paymentStatus
          paymentDateTime
          responseCode
          responseMessage
          bankTxnId
          healthCreditsRedeemed
          healthCreditsRedemptionRequest {
            Success
            Message
            RequestNumber
            AvailablePoints
            BalancePoints
            RedeemedPoints
            PointsValue
          }
          paymentMode
          refundAmount
        }
        medicineOrderRefunds {
          refundAmount
          refundStatus
          refundId
          orderId
          createdDate
        }
        medicineOrdersStatus {
          id
          orderStatus
          statusDate
          hideStatus
          statusMessage
          customReason
        }
        medicineOrderShipments {
          id
          siteId
          siteName
          apOrderNo
          updatedDate
          currentStatus
          itemDetails
          medicineOrdersStatus {
            id
            orderStatus
            statusDate
            hideStatus
          }
          medicineOrderInvoice {
            id
            siteId
            remarks
            requestType
            vendorName
            billDetails
            itemDetails
          }
        }
        patient {
          mobileNumber
          id
          firstName
          lastName
          addressList {
            id
            addressLine1
            addressLine2
            city
            state
            zipcode
          }
        }
        medicineOrderAddress {
          addressLine1
          addressLine2
          city
          state
          zipcode
          name
          mobileNumber
        }
      }
    }
  }
`;
