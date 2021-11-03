import { gql } from 'graphql-tag';

export const GET_DIAGNOSTIC_ORDER_DETAILS = gql`
  query getDiagnosticOrderDetailsByDisplayID($orderAutoId: Int) {
    getDiagnosticOrderDetailsByDisplayID(displayId: $orderAutoId) {
      ordersList {
        id
        preBookingId
        orderStatus
        paymentType
        displayId
        city
        cityId
        slotDateTimeInUTC
        invoiceURL
        labReportURL
        collectionCharges
        city
        diagnosticOrderLineItems {
          itemId
          itemName
        }
        diagnosticOrdersStatus {
          itemId
          itemName
          orderStatus
          statusDate
        }
        phleboDetailsObj {
          PhelbotomistName
          PhelbotomistMobile
          PhelbotomistTrackLink
        }
        patientObj {
          uhid
          firstName
        }
        patientAddressObj {
          city
          state
          zipcode
        }
      }
    }
  }
`;
