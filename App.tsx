import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Alert,
  Platform,
} from 'react-native';

// ==========================================================
// DATA STATIS (konstanta biasa, bukan state)
// Seluruh isi layar berasal dari sini, jadi mudah diganti.
// ==========================================================
const COLORS = {
  teal: '#16343A',     // latar hero dan bilah atas
  paper: '#EEF0F2',    // latar halaman
  white: '#FFFFFF',
  burgundy: '#7B2D45', // aksen utama: tombol dan penanda
  mustard: '#D9A441',  // aksen kecil
  plank: '#B9892F',    // papan rak
  ink: '#1B1F2B',      // teks utama
  stone: '#667085',    // teks pendukung
  line: '#CBD2D9',     // garis pemisah
  slate: '#3E4C7A',
  moss: '#5E7F4F',
  plum: '#4A2E63',
  ocean: '#1D5C63',
};

const SERIF = Platform.select({ ios: 'Georgia', android: 'serif', default: 'serif' });
const SCREEN_WIDTH = Dimensions.get('window').width;

// Ganti dengan datamu sendiri
const PROFIL = {
  nama: 'Marthin',
  nim: 'Isi NIM kamu',
  prodi: 'Teknik Informatika',
  kampus: 'Universitas PGRI Delta Sidoarjo',
  status: 'Aktif',
  berlaku: '31 Desember 2026',
};

// Data contoh untuk keperluan tugas
const SPINES = [
  { w: 24, h: 96, c: COLORS.burgundy },
  { w: 30, h: 128, c: COLORS.ocean },
  { w: 22, h: 108, c: COLORS.mustard },
  { w: 28, h: 138, c: COLORS.slate },
  { w: 24, h: 100, c: COLORS.moss },
  { w: 32, h: 124, c: COLORS.plum },
  { w: 22, h: 92, c: COLORS.burgundy },
  { w: 28, h: 132, c: COLORS.ocean },
  { w: 24, h: 104, c: COLORS.mustard },
  { w: 30, h: 118, c: COLORS.slate },
];

const BOOKS = [
  { title: 'Struktur Data dan Algoritma', author: 'Prof. Dr. Ahmad', format: 'PDF', color: COLORS.burgundy },
  { title: 'Panduan React Native', author: 'Budi Santoso, M.T.', format: 'EPUB', color: COLORS.ocean },
  { title: 'Basis Data Modern', author: 'Siti Rahma, M.Kom.', format: 'PDF', color: COLORS.slate },
  { title: 'Metodologi Penelitian', author: 'Dr. Rini Kusuma', format: 'PDF', color: COLORS.moss },
];

const CATEGORIES = [
  { name: 'Teknologi Informasi', count: '1.240 judul', color: COLORS.ocean },
  { name: 'Matematika', count: '860 judul', color: COLORS.slate },
  { name: 'Ekonomi dan Bisnis', count: '1.050 judul', color: COLORS.moss },
  { name: 'Bahasa dan Sastra', count: '720 judul', color: COLORS.plum },
  { name: 'Jurnal Ilmiah', count: '850 judul', color: COLORS.burgundy },
  { name: 'Skripsi dan Tugas Akhir', count: '3.200 judul', color: COLORS.mustard },
];

const DETAIL = {
  title: 'Pemrograman Mobile Modern',
  author: 'Budi Santoso, M.T.',
  color: COLORS.burgundy,
  rows: [
    { label: 'Edisi', value: 'Revisi 2026' },
    { label: 'Halaman', value: '312 halaman' },
    { label: 'Format', value: 'EPUB' },
    { label: 'Masa pinjam', value: '7 hari' },
  ],
  synopsis:
    'Buku ini membahas konsep arsitektur aplikasi mobile lintas platform dan cara menyusun komponen antarmuka modern dengan sederhana.',
};

const LOANS = [
  { title: 'Struktur Data dan Algoritma', sisa: 5, total: 7 },
  { title: 'Panduan React Native', sisa: 2, total: 7 },
  { title: 'Basis Data Modern', sisa: 6, total: 7 },
];

const BARCODE = [
  3, 1, 2, 1, 1, 3, 2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 2, 3, 1, 1, 2, 3, 1, 2, 1, 1, 3, 2, 1, 2, 3, 1, 1, 2,
];

// ==========================================================
// KOMPONEN KECIL (menerima props, tanpa state)
// ==========================================================
function Page({ children }) {
  return (
    <View style={styles.pageWrap}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.pageContent}>
        {children}
      </ScrollView>
    </View>
  );
}

function Cover({ title, color, large }) {
  return (
    <View style={[styles.cover, large ? styles.coverLarge : styles.coverSmall, { backgroundColor: color }]}>
      <Text style={[styles.coverTitle, large && styles.coverTitleLarge]} numberOfLines={4}>
        {title}
      </Text>
      <View style={styles.coverStripe} />
    </View>
  );
}

function FactItem({ value, label, withDivider }) {
  return (
    <View style={[styles.factItem, withDivider && styles.factDivider]}>
      <Text style={styles.factValue}>{value}</Text>
      <Text style={styles.factLabel}>{label}</Text>
    </View>
  );
}

function BookRow({ title, author, format, color }) {
  return (
    <View style={styles.bookRow}>
      <Cover title={title} color={color} />
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{title}</Text>
        <Text style={styles.bookAuthor}>{author}</Text>
        <Text style={styles.bookFormat}>{format}</Text>
      </View>
    </View>
  );
}

function CategoryTile({ name, count, color }) {
  return (
    <View style={[styles.tile, { borderLeftColor: color }]}>
      <Text style={styles.tileName}>{name}</Text>
      <Text style={styles.tileCount}>{count}</Text>
    </View>
  );
}

function DefRow({ label, value }) {
  return (
    <View style={styles.defRow}>
      <Text style={styles.defLabel}>{label}</Text>
      <Text style={styles.defValue}>{value}</Text>
    </View>
  );
}

function LoanRow({ title, sisa, total }) {
  const persen = (sisa / total) * 100;
  return (
    <View style={styles.loanRow}>
      <Text style={styles.loanTitle}>{title}</Text>
      <Text style={styles.loanInfo}>
        Sisa {sisa} dari {total} hari
      </Text>
      <View style={styles.track}>
        <View
          style={[
            styles.fill,
            { width: `${persen}%`, backgroundColor: sisa <= 2 ? COLORS.burgundy : COLORS.ocean },
          ]}
        />
      </View>
    </View>
  );
}

// ==========================================================
// LAYAR 1: BERANDA (hero rak buku dari View)
// ==========================================================
function HomeScreen() {
  return (
    <Page>
      <View style={styles.hero}>
        <View style={styles.heroTextBox}>
          <Text style={styles.heroTitle}>Rak Maya</Text>
          <Text style={styles.heroDesc}>
            Perpustakaan digital kampus: baca e-book, jurnal, dan skripsi dari mana saja.
          </Text>
        </View>
        <View style={styles.shelfRow}>
          {SPINES.map((s, i) => (
            <View key={i} style={[styles.spine, { width: s.w, height: s.h, backgroundColor: s.c }]} />
          ))}
        </View>
        <View style={styles.plank} />
      </View>

      <View style={styles.factsRow}>
        <FactItem value="12.450" label="e-book" />
        <FactItem value="850" label="jurnal" withDivider />
        <FactItem value="3.200" label="skripsi" withDivider />
      </View>

      <View style={styles.body}>
        <Text style={styles.h2}>Baru ditambahkan</Text>
      </View>
      <View style={styles.listWrap}>
        {BOOKS.slice(0, 3).map((b) => (
          <BookRow key={b.title} title={b.title} author={b.author} format={b.format} color={b.color} />
        ))}
      </View>
    </Page>
  );
}

// ==========================================================
// LAYAR 2: KOLEKSI (kategori dengan garis warna di sisi kiri)
// ==========================================================
function CatalogScreen() {
  return (
    <Page>
      <View style={styles.body}>
        <Text style={styles.h1}>Jelajah koleksi</Text>
        <Text style={styles.paragraph}>Pilih kategori untuk mulai mencari bacaan.</Text>

        <View style={styles.tileGrid}>
          {CATEGORIES.map((c) => (
            <CategoryTile key={c.name} name={c.name} count={c.count} color={c.color} />
          ))}
        </View>

        <Text style={styles.h2}>Judul populer</Text>
      </View>
      <View style={styles.listWrap}>
        {BOOKS.map((b) => (
          <BookRow key={b.title} title={b.title} author={b.author} format={b.format} color={b.color} />
        ))}
      </View>
    </Page>
  );
}

// ==========================================================
// LAYAR 3: RINCIAN BUKU (sampul besar dan daftar definisi)
// ==========================================================
function DetailScreen() {
  return (
    <Page>
      <View style={styles.detailTop}>
        <Cover title={DETAIL.title} color={DETAIL.color} large />
      </View>

      <View style={styles.body}>
        <Text style={styles.detailTitle}>{DETAIL.title}</Text>
        <Text style={styles.detailAuthor}>{DETAIL.author}</Text>
      </View>

      <View style={styles.defWrap}>
        {DETAIL.rows.map((r) => (
          <DefRow key={r.label} label={r.label} value={r.value} />
        ))}
      </View>

      <View style={styles.body}>
        <Text style={styles.paragraph}>{DETAIL.synopsis}</Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => Alert.alert('Membuka buku', 'Pemrograman Mobile Modern siap dibaca.')}
        >
          <Text style={styles.primaryButtonText}>Baca sekarang</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.outlineButton}
          onPress={() => Alert.alert('Dipinjam', 'Buku dipinjam selama 7 hari.')}
        >
          <Text style={styles.outlineButtonText}>Pinjam 7 hari</Text>
        </TouchableOpacity>
      </View>
    </Page>
  );
}

// ==========================================================
// LAYAR 4: PINJAMAN SAYA (bilah sisa waktu pinjam)
// ==========================================================
function LoanScreen() {
  return (
    <Page>
      <View style={styles.body}>
        <Text style={styles.h1}>Pinjaman saya</Text>
        <Text style={styles.paragraph}>
          {LOANS.length} buku sedang dipinjam. Buku digital kembali otomatis saat masa pinjam habis.
        </Text>
      </View>
      <View style={styles.listWrap}>
        {LOANS.map((l) => (
          <LoanRow key={l.title} title={l.title} sisa={l.sisa} total={l.total} />
        ))}
      </View>
    </Page>
  );
}

// ==========================================================
// LAYAR 5: KARTU ANGGOTA (kartu identitas dengan barcode)
// ==========================================================
function ProfileScreen() {
  return (
    <Page>
      <View style={styles.body}>
        <Text style={styles.h1}>Kartu anggota</Text>

        <View style={styles.idCard}>
          <View style={styles.idBand}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{PROFIL.nama.charAt(0)}</Text>
            </View>
            <Text style={styles.idName}>{PROFIL.nama}</Text>
            <Text style={styles.idNim}>{PROFIL.nim}</Text>
          </View>

          <View style={styles.idBody}>
            <DefRow label="Program studi" value={PROFIL.prodi} />
            <DefRow label="Kampus" value={PROFIL.kampus} />
            <DefRow label="Status" value={PROFIL.status} />
            <DefRow label="Berlaku sampai" value={PROFIL.berlaku} />
          </View>

          <View style={styles.barcodeBox}>
            <View style={styles.barcodeRow}>
              {BARCODE.map((n, i) => (
                <View key={i} style={[styles.bar, { width: n * 2 }]} />
              ))}
            </View>
            <Text style={styles.barcodeCaption}>Tunjukkan di meja layanan</Text>
          </View>
        </View>
      </View>
    </Page>
  );
}

// ==========================================================
// KOMPONEN UTAMA: 5 layar yang bisa digeser ke samping
// ==========================================================
export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.teal} />

      <View style={styles.topBar}>
        <Text style={styles.topBarTitle}>Rak Maya</Text>
        <Text style={styles.topBarHint}>Geser ke samping untuk berpindah layar</Text>
      </View>

      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        <HomeScreen />
        <CatalogScreen />
        <DetailScreen />
        <LoanScreen />
        <ProfileScreen />
      </ScrollView>
    </SafeAreaView>
  );
}

// ==========================================================
// STYLESHEET
// ==========================================================
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.teal },

  topBar: { backgroundColor: COLORS.teal, paddingHorizontal: 20, paddingTop: 8, paddingBottom: 12 },
  topBarTitle: { fontFamily: SERIF, fontSize: 18, color: COLORS.white },
  topBarHint: { fontSize: 12, color: '#9DB7BC', marginTop: 2 },

  pageWrap: { width: SCREEN_WIDTH, backgroundColor: COLORS.paper },
  pageContent: { paddingBottom: 32 },
  body: { paddingHorizontal: 20, paddingTop: 20 },

  h1: { fontFamily: SERIF, fontSize: 28, color: COLORS.ink, lineHeight: 34 },
  h2: { fontFamily: SERIF, fontSize: 20, color: COLORS.ink, marginTop: 24, marginBottom: 4 },
  paragraph: { fontSize: 15, lineHeight: 23, color: COLORS.ink, marginTop: 8 },

  listWrap: { marginTop: 8, backgroundColor: COLORS.white, borderTopWidth: 1, borderTopColor: COLORS.line },

  // Sampul buku buatan (tanpa gambar, jadi aman tanpa internet)
  cover: { padding: 8, justifyContent: 'space-between', borderRadius: 2 },
  coverSmall: { width: 56, height: 80 },
  coverLarge: { width: 150, height: 210, padding: 14 },
  coverTitle: { fontFamily: SERIF, fontSize: 9, lineHeight: 11, color: COLORS.white },
  coverTitleLarge: { fontSize: 18, lineHeight: 23 },
  coverStripe: { height: 4, width: '60%', backgroundColor: COLORS.mustard },

  // Layar 1
  hero: { height: 310, backgroundColor: COLORS.teal, overflow: 'hidden' },
  heroTextBox: { paddingHorizontal: 20, paddingTop: 20 },
  heroTitle: { fontFamily: SERIF, fontSize: 40, color: COLORS.white, lineHeight: 46 },
  heroDesc: { fontSize: 14, lineHeight: 21, color: '#C3D6D9', marginTop: 8, maxWidth: 280 },
  shelfRow: {
    position: 'absolute', left: 20, right: 20, bottom: 14,
    flexDirection: 'row', alignItems: 'flex-end',
  },
  spine: { marginRight: 4, borderTopLeftRadius: 2, borderTopRightRadius: 2 },
  plank: { position: 'absolute', left: 0, right: 0, bottom: 0, height: 14, backgroundColor: COLORS.plank },
  factsRow: {
    flexDirection: 'row', backgroundColor: COLORS.white,
    paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: COLORS.line,
  },
  factItem: { flex: 1, alignItems: 'center' },
  factDivider: { borderLeftWidth: 1, borderLeftColor: COLORS.line },
  factValue: { fontFamily: SERIF, fontSize: 26, color: COLORS.burgundy },
  factLabel: { fontSize: 12, color: COLORS.stone, marginTop: 2 },

  bookRow: {
    flexDirection: 'row', alignItems: 'center',
    paddingVertical: 14, paddingHorizontal: 20,
    borderBottomWidth: 1, borderBottomColor: COLORS.line,
  },
  bookInfo: { flex: 1, marginLeft: 16 },
  bookTitle: { fontFamily: SERIF, fontSize: 17, color: COLORS.ink },
  bookAuthor: { fontSize: 13, color: COLORS.stone, marginTop: 2 },
  bookFormat: { fontSize: 12, fontWeight: '700', color: COLORS.burgundy, marginTop: 6 },

  // Layar 2
  tileGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 16 },
  tile: {
    width: '48%', backgroundColor: COLORS.white, borderLeftWidth: 6,
    paddingVertical: 14, paddingHorizontal: 12, marginBottom: 12,
  },
  tileName: { fontFamily: SERIF, fontSize: 15, color: COLORS.ink, lineHeight: 20 },
  tileCount: { fontSize: 12, color: COLORS.stone, marginTop: 4 },

  // Layar 3
  detailTop: { alignItems: 'center', paddingTop: 24 },
  detailTitle: { fontFamily: SERIF, fontSize: 24, color: COLORS.ink, textAlign: 'center' },
  detailAuthor: { fontSize: 14, color: COLORS.stone, textAlign: 'center', marginTop: 4 },
  defWrap: { marginTop: 20, backgroundColor: COLORS.white, paddingHorizontal: 20, borderTopWidth: 1, borderBottomWidth: 1, borderColor: COLORS.line },
  defRow: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: COLORS.line },
  defLabel: { fontSize: 12, color: COLORS.stone },
  defValue: { fontSize: 16, color: COLORS.ink, marginTop: 2 },
  primaryButton: { backgroundColor: COLORS.burgundy, paddingVertical: 14, borderRadius: 4, alignItems: 'center', marginTop: 24 },
  primaryButtonText: { fontSize: 16, fontWeight: '700', color: COLORS.white },
  outlineButton: {
    borderWidth: 1.5, borderColor: COLORS.burgundy, paddingVertical: 13, borderRadius: 4,
    alignItems: 'center', marginTop: 12,
  },
  outlineButtonText: { fontSize: 16, fontWeight: '700', color: COLORS.burgundy },

  // Layar 4
  loanRow: { paddingVertical: 16, paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: COLORS.line },
  loanTitle: { fontFamily: SERIF, fontSize: 17, color: COLORS.ink },
  loanInfo: { fontSize: 13, color: COLORS.stone, marginTop: 2 },
  track: { height: 6, backgroundColor: COLORS.line, marginTop: 10, borderRadius: 3, overflow: 'hidden' },
  fill: { height: 6, borderRadius: 3 },

  // Layar 5
  idCard: { marginTop: 20, backgroundColor: COLORS.white, borderRadius: 6, overflow: 'hidden' },
  idBand: { backgroundColor: COLORS.teal, alignItems: 'center', paddingVertical: 24 },
  avatar: {
    width: 72, height: 72, borderRadius: 36, backgroundColor: COLORS.mustard,
    alignItems: 'center', justifyContent: 'center',
  },
  avatarText: { fontFamily: SERIF, fontSize: 32, color: COLORS.ink },
  idName: { fontFamily: SERIF, fontSize: 24, color: COLORS.white, marginTop: 12 },
  idNim: { fontSize: 13, color: '#9DB7BC', marginTop: 2 },
  idBody: { paddingHorizontal: 20, paddingVertical: 4 },
  barcodeBox: { alignItems: 'center', paddingVertical: 20 },
  barcodeRow: { flexDirection: 'row', alignItems: 'flex-end', height: 44 },
  bar: { height: 44, marginRight: 2, backgroundColor: COLORS.ink },
  barcodeCaption: { fontSize: 12, color: COLORS.stone, marginTop: 8 },
});