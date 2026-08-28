
function CheckoutPage({ navigate, cart = [], region = 'egypt', setRegion, placeOrder, lang = 'EN', currency = 'EGP' }) {
  const isAr = lang === 'AR';
  const bodyFont = isAr ? "'IBM Plex Sans Arabic', sans-serif" : "'Jost', sans-serif";
  const gold = '#c4a355';

  React.useEffect(() => { window.scrollTo({ top: 0 }); if (!cart.length) navigate('cart'); }, []);

  const [form, setForm] = React.useState({ name: '', email: '', phone: '', address: '', city: '', country: '' });
  const [card, setCard] = React.useState({ number: '', exp: '', cvc: '', holder: '' });
  const [billingSame, setBillingSame] = React.useState(true);
  const [errors, setErrors] = React.useState({});
  const [processing, setProcessing] = React.useState(false);

  const subtotal = cart.reduce((s, i) => s + i.price, 0);
  const framedCount = cart.filter(i => i.framed).length;
  const shipping = window.SHIPPING.cost(region, framedCount);
  const total = subtotal + shipping;
  const R = window.SHIPPING.regions;

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const inputStyle = (err) => ({
    width: '100%', background: 'rgba(240,234,216,0.04)',
    border: `1px solid ${err ? 'rgba(200,90,70,0.6)' : 'rgba(240,234,216,0.14)'}`,
    color: '#f0ead8', fontFamily: bodyFont, fontSize: '14px', padding: '13px 14px', outline: 'none',
  });
  const labelStyle = { fontFamily: bodyFont, fontSize: '10px', letterSpacing: isAr ? 0 : '0.16em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(240,234,216,0.45)', marginBottom: '8px', display: 'block' };

  const field = (k, label, type, full) => (
    <div key={k} style={{ gridColumn: full ? '1 / -1' : 'auto' }}>
      <label style={labelStyle}>{label}</label>
      <input type={type || 'text'} value={form[k]} onChange={e => set(k, e.target.value)} style={inputStyle(errors[k])} />
    </div>
  );

  const digits = s => s.replace(/\D/g, '');
  const brand = (num) => {
    const n = digits(num);
    if (/^4/.test(n)) return 'Visa';
    if (/^5[1-5]|^2[2-7]/.test(n)) return 'Mastercard';
    if (/^3[47]/.test(n)) return 'Amex';
    if (/^(50|5[6-9]|6)/.test(n)) return 'Meeza';
    return null;
  };
  const luhn = (num) => {
    const n = digits(num);
    if (n.length < 13) return false;
    let sum = 0, alt = false;
    for (let i = n.length - 1; i >= 0; i--) {
      let v = +n[i];
      if (alt) { v *= 2; if (v > 9) v -= 9; }
      sum += v; alt = !alt;
    }
    return sum % 10 === 0;
  };
  const setCardNumber = (v) => {
    const n = digits(v).slice(0, 19);
    const grouped = /^3[47]/.test(n)
      ? n.replace(/^(\d{0,4})(\d{0,6})(\d{0,5}).*/, (m, a, b, c) => [a, b, c].filter(Boolean).join(' '))
      : n.replace(/(\d{4})(?=\d)/g, '$1 ');
    setCard(c => ({ ...c, number: grouped }));
  };
  const setCardExp = (v) => {
    let n = digits(v).slice(0, 4);
    if (n.length >= 1 && +n[0] > 1) n = '0' + n;
    const out = n.length > 2 ? n.slice(0, 2) + '/' + n.slice(2) : n;
    setCard(c => ({ ...c, exp: out }));
  };
  const expValid = (v) => {
    const m = /^(\d{2})\/(\d{2})$/.exec(v);
    if (!m) return false;
    const mm = +m[1], yy = 2000 + +m[2];
    if (mm < 1 || mm > 12) return false;
    const now = new Date();
    return yy > now.getFullYear() || (yy === now.getFullYear() && mm >= now.getMonth() + 1);
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 1;
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 1;
    if (!form.phone.trim()) e.phone = 1;
    if (!form.address.trim()) e.address = 1;
    if (!form.city.trim()) e.city = 1;
    if (!form.country.trim()) e.country = 1;
    if (!luhn(card.number)) e.cardNumber = 1;
    if (!expValid(card.exp)) e.cardExp = 1;
    if (digits(card.cvc).length < (/^3[47]/.test(digits(card.number)) ? 4 : 3)) e.cardCvc = 1;
    if (!card.holder.trim()) e.cardHolder = 1;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handlePlace = () => {
    if (!validate()) { window.scrollTo({ top: 120, behavior: 'smooth' }); return; }
    setProcessing(true);
    setTimeout(() => {
      placeOrder({
        buyer: form,
        items: cart.map(i => ({ ...i, editionNumber: i.editionsSold != null ? i.editionsSold + 1 : null })),
        region, subtotal, shipping, total,
        gateway: 'paymob', payMethod: 'card',
        card: { brand: brand(card.number) || 'Card', last4: digits(card.number).slice(-4) },
        eta: isAr ? R[region].etaAr : R[region].etaEn,
      });
    }, 1400);
  };

  return (
    <div style={{ background: '#1b1916', color: '#f0ead8', paddingTop: '108px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: 'clamp(36px,5vw,72px) clamp(20px,4vw,72px)' }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '24px' }}>
          <button onClick={() => navigate('cart')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.35)', padding: 0 }}>{isAr ? 'السلة' : 'Cart'}</button>
          <span style={{ color: 'rgba(240,234,216,0.2)', fontSize: '11px' }}>·</span>
          <span style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.55)' }}>{isAr ? 'الدفع' : 'Checkout'}</span>
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(34px,4.5vw,56px)', margin: '0 0 40px' }}>{isAr ? 'إتمام الشراء' : 'Checkout'}</h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,380px)', gap: 'clamp(32px,4vw,64px)', alignItems: 'start' }} className="cart-grid">

          {/* Form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

            {/* Contact & delivery */}
            <section>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: '24px', margin: '0 0 20px' }}>{isAr ? '١ · التوصيل' : '1 · Delivery Details'}</h2>
              <div className="form-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {field('name', isAr ? 'الاسم الكامل' : 'Full name', 'text', true)}
                {field('email', isAr ? 'البريد الإلكتروني' : 'Email', 'email')}
                {field('phone', isAr ? 'رقم الهاتف' : 'Phone', 'tel')}
                {field('address', isAr ? 'عنوان التوصيل' : 'Delivery address', 'text', true)}
                {field('city', isAr ? 'المدينة' : 'City', 'text')}
                {field('country', isAr ? 'الدولة' : 'Country', 'text')}
              </div>
              <div style={{ marginTop: '16px' }}>
                <label style={labelStyle}>{isAr ? 'منطقة الشحن' : 'Shipping region'}</label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {Object.keys(R).map(key => (
                    <button key={key} onClick={() => setRegion(key)} style={{
                      background: region === key ? 'rgba(196,163,85,0.1)' : 'transparent',
                      border: `1px solid ${region === key ? gold : 'rgba(240,234,216,0.14)'}`,
                      color: region === key ? gold : 'rgba(240,234,216,0.6)',
                      cursor: 'pointer', padding: '9px 16px', fontFamily: bodyFont, fontSize: '12px', transition: 'all 0.2s',
                    }}>{isAr ? R[key].labelAr : R[key].labelEn}</button>
                  ))}
                </div>
                {region === 'intl' && (
                  <p style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(196,163,85,0.75)', margin: '10px 0 0', lineHeight: 1.6 }}>
                    {isAr ? 'قد تطبَّق رسوم جمركية أو ضرائب استيراد حسب قوانين وجهتك، وتُدفع عند الاستلام مباشرة — غير مشمولة في هذا المبلغ.' : 'International orders may be subject to customs duties or import taxes set by your country, payable directly on delivery — not included in this total.'}
                  </p>
                )}
              </div>
            </section>

            {/* Payment */}
            <section>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: '24px', margin: 0 }}>{isAr ? '٢ · الدفع' : '2 · Payment'}</h2>
                <span style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(196,163,85,0.75)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Icon.Lock /> {isAr ? 'اتصال مشفّر' : 'Encrypted connection'}
                </span>
              </div>
              <p style={{ fontFamily: bodyFont, fontSize: '12px', color: 'rgba(240,234,216,0.4)', margin: '0 0 18px', lineHeight: 1.6 }}>
                {isAr ? 'ندعم بطاقات الائتمان والخصم الصادرة محليًا ودوليًا.' : 'We accept credit and debit cards issued locally and internationally.'}
              </p>

              <div style={{ border: '1px solid rgba(240,234,216,0.12)', background: 'rgba(240,234,216,0.02)', padding: 'clamp(20px,2.6vw,28px)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  <span style={{ fontFamily: bodyFont, fontSize: '11px', letterSpacing: isAr ? 0 : '0.16em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(240,234,216,0.5)' }}>{isAr ? 'تفاصيل البطاقة' : 'Card details'}</span>
                  <span style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    {['Visa', 'Mastercard', 'Amex', 'Meeza'].map(b => {
                      const detected = brand(card.number);
                      const dim = detected && detected !== b;
                      return <CardMark key={b} brand={b} dim={dim} />;
                    })}
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-2col">
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={labelStyle}>{isAr ? 'رقم البطاقة' : 'Card number'}</label>
                    <div style={{ position: 'relative' }}>
                      <input type="text" inputMode="numeric" autoComplete="cc-number" value={card.number} onChange={e => setCardNumber(e.target.value)} placeholder="0000 0000 0000 0000"
                        style={{ ...inputStyle(errors.cardNumber), letterSpacing: '0.1em', paddingRight: '52px' }} />
                      {brand(card.number) && (
                        <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                          <CardMark brand={brand(card.number)} />
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>{isAr ? 'تاريخ الانتهاء' : 'Expiry date'}</label>
                    <input type="text" inputMode="numeric" autoComplete="cc-exp" value={card.exp} onChange={e => setCardExp(e.target.value)} placeholder="MM / YY" style={inputStyle(errors.cardExp)} />
                  </div>
                  <div>
                    <label style={labelStyle}>{isAr ? 'رمز التحقق CVC' : 'Security code (CVC)'}</label>
                    <input type="text" inputMode="numeric" autoComplete="cc-csc" value={card.cvc} onChange={e => setCard(c => ({ ...c, cvc: digits(e.target.value).slice(0, 4) }))} placeholder="123" style={inputStyle(errors.cardCvc)} />
                  </div>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={labelStyle}>{isAr ? 'الاسم على البطاقة' : 'Name on card'}</label>
                    <input type="text" autoComplete="cc-name" value={card.holder} onChange={e => setCard(c => ({ ...c, holder: e.target.value }))} style={inputStyle(errors.cardHolder)} />
                  </div>
                </div>

                {(errors.cardNumber || errors.cardExp || errors.cardCvc || errors.cardHolder) && (
                  <p style={{ fontFamily: bodyFont, fontSize: '11.5px', color: 'rgba(205,115,95,0.95)', margin: '14px 0 0' }}>
                    {isAr ? 'يرجى مراجعة بيانات البطاقة.' : 'Please check your card details.'}
                  </p>
                )}

                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px', cursor: 'pointer' }}>
                  <span onClick={() => setBillingSame(v => !v)} style={{ width: 15, height: 15, flexShrink: 0, border: `1px solid ${billingSame ? gold : 'rgba(240,234,216,0.28)'}`, background: billingSame ? gold : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
                    {billingSame && <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M2 6.2 4.6 8.8 10 3.4" stroke="#1b1916" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  </span>
                  <span onClick={() => setBillingSame(v => !v)} style={{ fontFamily: bodyFont, fontSize: '12.5px', color: 'rgba(240,234,216,0.6)' }}>{isAr ? 'عنوان الفوترة هو نفسه عنوان التوصيل' : 'Billing address same as delivery address'}</span>
                </label>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '14px' }}>
                <Icon.Lock />
                <p style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.35)', margin: 0, lineHeight: 1.6 }}>
                  {isAr ? 'تُرسل بيانات بطاقتك مشفّرة بمعيار 3-D Secure عبر بوابة دفع معتمدة من PCI DSS. لا نحتفظ بأي بيانات بطاقة على خوادمنا.' : 'Card data is sent encrypted with 3-D Secure through a PCI DSS certified payment gateway. We never store card details on our servers.'}
                </p>
              </div>
            </section>
          </div>

          {/* Summary */}
          <div style={{ position: 'sticky', top: '130px', border: '1px solid rgba(240,234,216,0.1)', background: 'rgba(240,234,216,0.02)', padding: 'clamp(24px,3vw,32px)', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: '24px', margin: 0 }}>{isAr ? 'طلبك' : 'Your Order'}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxHeight: '280px', overflowY: 'auto' }}>
              {cart.map((i, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '12px' }}>
                  <img src={i.image} alt={i.title} style={{ width: 48, height: 60, objectFit: 'cover', flexShrink: 0, background: '#242018' }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', margin: '0 0 2px', lineHeight: 1.15 }}>{i.title}</p>
                    <p style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.4)', margin: 0 }}>{i.size} cm · {i.framed ? (isAr ? 'مؤطّرة' : 'Framed') : (isAr ? 'بدون إطار' : 'Unframed')}</p>
                  </div>
                  <span style={{ fontFamily: bodyFont, fontSize: '12px', color: 'rgba(240,234,216,0.7)' }}>{window.formatPrice(i.price, currency).primary}</span>
                </div>
              ))}
            </div>
            <div style={{ height: '1px', background: 'rgba(240,234,216,0.1)' }} />
            <Row label={isAr ? 'المجموع الفرعي' : 'Subtotal'} val={window.formatPrice(subtotal, currency).primary} font={bodyFont} />
            <Row label={isAr ? 'الشحن' : 'Shipping'} val={window.formatPrice(shipping, currency).primary} font={bodyFont} />
            <div style={{ height: '1px', background: 'rgba(240,234,216,0.1)' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: bodyFont, fontSize: '11px', letterSpacing: isAr ? 0 : '0.16em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(240,234,216,0.55)' }}>{isAr ? 'الإجمالي' : 'Total'}</span>
              <span style={{ textAlign: 'right' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '30px', fontWeight: 300, display: 'block' }}>{window.formatPrice(total, currency).primary}</span>
                {window.formatPrice(total, currency).secondary && <span style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.5)' }}>{window.formatPrice(total, currency).secondary}</span>}
              </span>
            </div>
            <button onClick={handlePlace} disabled={processing} style={{ background: processing ? 'rgba(196,163,85,0.4)' : gold, color: '#1b1916', border: 'none', cursor: processing ? 'default' : 'pointer', padding: '16px', fontFamily: bodyFont, fontSize: '11px', letterSpacing: isAr ? 0 : '0.18em', textTransform: isAr ? 'none' : 'uppercase', fontWeight: 600, transition: 'all 0.2s' }}>
              {processing ? (isAr ? 'جارٍ المعالجة…' : 'Processing…') : (isAr ? `ادفع ${window.formatPrice(total, currency).primary}` : `Pay ${window.formatPrice(total, currency).primary}`)}
            </button>
            {currency !== 'EGP' && (
              <p style={{ fontFamily: bodyFont, fontSize: '10.5px', color: 'rgba(240,234,216,0.4)', textAlign: 'center', margin: '-8px 0 0' }}>
                {isAr ? `سيتم الخصم فعليا بالجنيه المصري: ${window.formatPrice(total, 'EGP').primary}` : `You'll be charged in EGP: ${window.formatPrice(total, 'EGP').primary}`}
              </p>
            )}
            <p style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.35)', textAlign: 'center', margin: 0, lineHeight: 1.6, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <Icon.Lock /> {isAr ? 'دفع مشفّر وآمن' : 'Encrypted, secure payment'}
            </p>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 820px){ .cart-grid{ grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

/* ── Payment network marks ─────────────────────────────────── */
function CardMark({ brand, dim }) {
  const wrap = { width: 38, height: 25, borderRadius: 3, background: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.25s', filter: dim ? 'grayscale(1)' : 'none', opacity: dim ? 0.5 : 1, flexShrink: 0 };
  const marks = {
    Visa: (
      <svg width="30" height="11" viewBox="0 0 48 16" aria-label="Visa">
        <text x="0" y="13" fontFamily="Helvetica, Arial, sans-serif" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1434CB" letterSpacing="-0.5">VISA</text>
      </svg>
    ),
    Mastercard: (
      <svg width="32" height="20" viewBox="0 0 40 25" aria-label="Mastercard">
        <circle cx="15.5" cy="12.5" r="8.5" fill="#EB001B" />
        <circle cx="24.5" cy="12.5" r="8.5" fill="#F79E1B" fillOpacity="0.9" />
        <path d="M20 5.9a8.48 8.48 0 0 0 0 13.2 8.48 8.48 0 0 0 0-13.2z" fill="#FF5F00" />
      </svg>
    ),
    Amex: (
      <svg width="34" height="21" viewBox="0 0 44 26" aria-label="American Express">
        <rect width="44" height="26" rx="2" fill="#1F72CD" />
        <text x="22" y="16" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="9" fontWeight="700" fill="#fff" letterSpacing="0.5">AMEX</text>
      </svg>
    ),
    Meeza: (
      <svg width="34" height="12" viewBox="0 0 46 16" aria-label="Meeza">
        <text x="0" y="12" fontFamily="Helvetica, Arial, sans-serif" fontSize="11" fontWeight="700" fill="#00539F" letterSpacing="-0.2">meeza</text>
      </svg>
    ),
  };
  return <span style={wrap}>{marks[brand] || null}</span>;
}

Object.assign(window, { CheckoutPage, CardMark });
