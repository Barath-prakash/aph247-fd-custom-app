import React from 'react';

function OrderItem({ index: key, order, item }) {
  const { labelKey, labelValue, isHeader, isLink } = item;
  function getValue() {
    const splitItem = labelKey?.split('_');
    let dItem = null;
    splitItem?.forEach((dto, k) => {
      dItem = !k ? order?.[dto] : dItem?.[dto];
    });
    return dItem;
  }

  const itemValue = !labelKey?.includes('_') ? order?.[labelKey] : getValue();

  return (
    <>
      {!!key && isHeader && <div style={{ paddingBlock: 5 }} />}
      {labelValue && (
        <div style={{ marginLeft: !isHeader ? 5 : 0 }}>
          <div
            style={{
              color: isHeader ? '#2c5cc5' : 'darkslategrey',
              fontSize: 12,
              fontWeight: !labelKey ? 'bold' : 600,
            }}
          >
            {labelValue}
          </div>
          {labelKey && !isLink ? (
            <div
              style={{
                marginLeft: 5,
                fontSize: 11,
                color: 'grey',
                paddingBlock: 3,
              }}
            >
              {itemValue || '--'}
            </div>
          ) : labelKey && isLink ? (
            <a
              style={{
                marginLeft: 5,
                fontSize: 11,
                color: 'blue',
                paddingBlock: 3,
                cursor: 'pointer',
              }}
              onClick={() => {
                if (itemValue) {
                  window.open(itemValue, 'blank');
                }
              }}
            >
              {itemValue || '--'}
            </a>
          ) : null}
        </div>
      )}
    </>
  );
}

export default OrderItem;
