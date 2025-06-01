import { Button, Card, CardText, CardTitle, CardBody, Form, FormGroup, FormFeedback, Input, InputGroup, Label } from 'reactstrap';
import React, {useState} from 'react';
import axios from 'axios';
import Header from './Header';
import './SiparisFormu.css';


export default function SiparisFormu({onBack, onSuccess}) {

    const malzemeListesi = [ "Pepperoni", "Tavuk Izgara", "Mısır", "Sarımsak", "Ananas", "Sosis", "Soğan", "Sucuk", "Biber", "Kabak", " Kanada Jambonu", "Domates", "Jalepeno" ];
    
    const [seciliMalzemeler, setSeciliMalzemeler] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [boyut, setBoyut] = useState("");
    const [hamur, setHamur] = useState("");
    const [siparisNotu, setSiparisNotu] = useState("");


    const decreaseQuantity = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
    };
    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };
    
    const ekstraTutar = seciliMalzemeler.length * 5; // Her malzeme için 5₺ ek ücret
    const baseTutar = 85.50; // Pizza fiyatı
    const toplamTutar = (baseTutar + ekstraTutar) * quantity; // Toplam tutar hesaplama

    const handleEkCHange = (event) => {
        const value = event.target.value;
        setSeciliMalzemeler(prev => prev.includes(value) 
        ? prev.filter((item) => item !== value) : [...prev, value]);
        };
        

    const handleBoyutChange = (event) => {
        setBoyut(event.target.value);
    }
    const handleHamurChange = (event) => {
        setHamur(event.target.value);
    }
    const handleSiparisNotuChange = (event) => {
        setSiparisNotu(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (
            !boyut ||
            !hamur ||
            seciliMalzemeler.length < 4 ||
            seciliMalzemeler.length > 10
          ) {
            return;
          }
          const siparis = {
            boyut,
            hamur,
            extras: seciliMalzemeler,
            quantity,
            note: siparisNotu,
            total: toplamTutar.toFixed(2)
          };
        try {
            const response = await axios.post('https://reqres.in/api/pizza', siparis,  
                {
                headers: {
                  'x-api-key': 'reqres-free-v1'
                            }
                });
            console.log('Sipariş özeti:', response.data);

                // **Formu sıfırla**: tüm state’leri varsayılanlarına döndür
                setBoyut('');
                setHamur('');
                setSeciliMalzemeler([]);
                setQuantity(1);
                setSiparisNotu('');
                onSuccess();
            }  
            catch (error) {
                console.error('Sipariş gönderilirken hata oluştu:', error);
            }
    }


    return (
        <>
        <Header onBack={onBack}/>
        <div className="page-wrapper">
            <Form className="siparis-formu" onSubmit={handleSubmit}>
                <div className="siparis-formu-ust mb-4">
                    <h1>Position Absolute Acı Pizza</h1>
                    <div className="reviews">
                        <span className="display-4">85.50₺</span>
                        <small className="text-muted rating">
                            <span>4.9</span>
                            <span>(200)</span>
                        </small>
                    </div>
                        <p>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş kayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük pizzaya bazen pizzetta denir.</p>
                </div>
                <div className="siparis-radio-select">
                    <FormGroup className="boyut-secim">
                        <legend>
                            <span className="secim-label">Boyut Seç</span>{''}{!boyut && <span className='text-danger'>*</span>} 
                            </legend>
                            <FormGroup check>
                                <Input
                                    name="boyut"
                                    id="kucuk-boyut"
                                    value="kucuk"
                                    type="radio"
                                    onChange={handleBoyutChange}
                                    checked={boyut === 'kucuk'}
                                    />
                                        {' '}
                                <Label check for="kucuk-boyut"> Küçük
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input
                                    name="boyut"
                                    id="orta-boyut"
                                    value="orta"
                                    type="radio"
                                    onChange={handleBoyutChange}
                                    checked={boyut === 'orta'}
                                />
                                        {' '}
                                <Label check for="orta-boyut">
                                Orta
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input
                                    name="boyut"
                                    id="buyuk-boyut"
                                    value="buyuk"
                                    type="radio"
                                    onChange={handleBoyutChange}
                                    checked={boyut === 'buyuk'}
                                />
                                        {' '}
                                <Label check>
                                Büyük
                                </Label>
                            </FormGroup> 
                        </FormGroup>
                    <FormGroup className="hamur-secim-group">
                        <Label htmlFor="hamur-select" className="secim-label">
                        Hamur Seç{''}{!hamur && <span className='text-danger'>*</span>}
                        </Label>
                        <Input 
                        type="select" 
                        value={hamur}
                        onChange={handleHamurChange} 
                        id="hamur-select"
                        >
                        <option value="" disabled hidden>Hamur Kalınlığı</option>
                        <option>Kalın Hamur</option>
                        <option>İnce Hamur</option>
                        <option>Sade Hamur</option>
                        </Input>
                    </FormGroup>
                </div>
                <FormGroup className="ekstra-malzeme">
                    <Label className="h5">Ek Malzemeler</Label>
                    <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    <div className="malzeme-listesi">
                        {malzemeListesi.map((malzeme, index) => (
                            <FormGroup check key={index}>
                                <Input
                                    type="checkbox"
                                    value={malzeme}
                                    checked={seciliMalzemeler.includes(malzeme)}
                                    onChange={handleEkCHange}
                                    />
                                {' '}
                                <Label check>
                                {malzeme}
                                </Label>
                            </FormGroup>
                        ))}
                    </div>

                    {(seciliMalzemeler.length < 4 || seciliMalzemeler.length > 10) && (
                        <FormFeedback className="d-block">
                            {seciliMalzemeler.length < 4
                                ? "En az 4 malzeme seçmelisiniz."
                                : "En fazla 10 malzeme seçebilirsiniz."}
                        </FormFeedback>
                    )}
                </FormGroup>

                <FormGroup className="siparis-notu">
                    <Label for="note">Sipariş Notu</Label>
                    <Input
                    id="note"
                    name="note"
                    value={siparisNotu}
                    type="text"
                    onChange={handleSiparisNotuChange}
                    placeholder="Siparişinize eklemek istediğn bir not var mı?"
                    />
                </FormGroup> 
                <hr />

                <div className="d-flex">
                    <InputGroup className='quantity-group desktop-only'>
                        <Button onClick={decreaseQuantity}>–</Button>
                        <Input
                        type="number"
                        value={quantity}
                        readOnly
                        style={{ textAlign: 'center' }}
                        />
                        <Button onClick={increaseQuantity}>+</Button>
                    </InputGroup>
                    <div className='siparis-yan-kutu'>
                        <Card className='tutar-ozet'>
                            <CardBody>
                                <CardTitle tag="h5">Sipariş Toplamı</CardTitle>
                                    <div className='secimler'>
                                        <span>Seçimler</span>
                                        <span>{ekstraTutar.toFixed(2)}₺</span>  
                                    </div>
                                    <div className='toplam'>
                                        <strong>Toplam</strong>
                                        <strong>{toplamTutar.toFixed(2)}₺</strong>
                                    </div>
                            </CardBody>
                        </Card>   
                        <Button color="warning" type="submit" block
                                    disabled={
                                        !boyut ||
                                        !hamur ||
                                        seciliMalzemeler.length < 4 ||
                                        seciliMalzemeler.length > 10
                                    } className="siparis-ver-btn desktop-only">
                                    Siparişi Ver
                        </Button>
                        {/* Sadece mobilde görünen alt satır */}
                        <div className="bottom-row mobile-only">
                            <InputGroup className='quantity-group'>
                                <Button onClick={decreaseQuantity}>–</Button>
                                <Input
                                type="number"
                                value={quantity}
                                readOnly
                                style={{ textAlign: 'center' }}
                                />
                                <Button onClick={increaseQuantity}>+</Button>
                            </InputGroup>
                            <Button color="warning" type="submit" block
                                    disabled={
                                        !boyut ||
                                        !hamur ||
                                        seciliMalzemeler.length < 4 ||
                                        seciliMalzemeler.length > 10
                                    } className="siparis-ver-btn">
                                    Siparişi Ver
                            </Button>
                        </div>   
                    </div>  
                </div>
            </Form>
        </div>
        </>
    )
}