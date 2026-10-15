import Button from './components/ui/Button'
import Card from './components/ui/Card'
import Table from './components/ui/Table'
import './App.css'

/* ── Products data for the Table ── */
interface Product {
  id: number
  name: string
  category: string
  price: string
  stock: 'In Stock' | 'Low Stock' | 'Out of Stock'
  rating: string
}

const products: Product[] = [
  { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: '$89.99',  stock: 'In Stock',      rating: '⭐ 4.8' },
  { id: 2, name: 'Mechanical Keyboard', category: 'Electronics', price: '$129.00', stock: 'Low Stock',     rating: '⭐ 4.6' },
  { id: 3, name: 'Ergonomic Chair',     category: 'Furniture',   price: '$349.00', stock: 'In Stock',      rating: '⭐ 4.9' },
  { id: 4, name: 'USB-C Hub (7-in-1)', category: 'Accessories', price: '$45.50',  stock: 'Out of Stock',  rating: '⭐ 4.5' },
  { id: 5, name: 'Standing Desk',       category: 'Furniture',   price: '$520.00', stock: 'In Stock',      rating: '⭐ 4.7' },
]

const productColumns = [
  { header: '#',        accessor: 'id'       as keyof Product },
  { header: 'Product',  accessor: 'name'     as keyof Product },
  { header: 'Category', accessor: 'category' as keyof Product },
  { header: 'Price',    accessor: 'price'    as keyof Product },
  {
    header: 'Status',
    accessor: 'stock' as keyof Product,
    render: (value: Product[keyof Product]) => {
      const map: Record<string, string> = {
        'In Stock':      'in-stock',
        'Low Stock':     'low-stock',
        'Out of Stock':  'out-of-stock',
      }
      return <span className={`badge badge--${map[String(value)]}`}>{String(value)}</span>
    },
  },
  { header: 'Rating', accessor: 'rating' as keyof Product },
]

function App() {
  return (
    <main className="app">
      {/* ── Header ── */}
      <header className="app__header">
        <span className="app__tag">Assignment 2</span>
        <h1 className="app__title">Reusable Components</h1>
        <p className="app__subtitle">
          A showcase of generic, reusable React components built with TypeScript
        </p>
      </header>

      {/* ════════════ SECTION 1: Button ════════════ */}
      <section className="app__section">
        <div className="app__section-header">
          <h2>Button</h2>
          <code>src/components/ui/Button.tsx</code>
        </div>
        <div className="app__row">
          <Button
            text="Primary Action"
            variant="primary"
            onClick={() => alert('Primary clicked!')}
          />
          <Button
            text="Secondary Action"
            variant="secondary"
            onClick={() => alert('Secondary clicked!')}
          />
          <Button
            text="Delete Item"
            variant="danger"
            onClick={() => alert('Danger clicked!')}
          />
          <Button
            text="Disabled"
            variant="primary"
            disabled
          />
        </div>
      </section>

      {/* ════════════ SECTION 2: Card ════════════ */}
      <section className="app__section">
        <div className="app__section-header">
          <h2>Card</h2>
          <code>src/components/ui/Card.tsx</code>
        </div>
        <div className="app__row app__row--cards">
          {/* Card 1 – with image & description only */}
          <Card
            title="Ergonomic Workspace"
            description="Discover how a well-designed workspace can boost your productivity and keep you comfortable throughout the day."
            image="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=680&q=80"
          />

          {/* Card 2 – with children (custom content inside) */}
          <Card
            title="New Arrivals"
            description="Check out our latest products this season."
            image="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=680&q=80"
          >
            <Button
              text="Shop Now"
              variant="primary"
              onClick={() => alert('Shop Now clicked!')}
            />
          </Card>

          {/* Card 3 – no image, children only */}
          <Card title="Quick Stats">
            <ul className="stats-list">
              <li><span>Total Products</span><strong>128</strong></li>
              <li><span>In Stock</span><strong>94</strong></li>
              <li><span>Out of Stock</span><strong>34</strong></li>
            </ul>
          </Card>
        </div>
      </section>

      {/* ════════════ SECTION 3: Table ════════════ */}
      <section className="app__section">
        <div className="app__section-header">
          <h2>Table</h2>
          <code>src/components/ui/Table.tsx</code>
        </div>
        <Table<Product>
          columns={productColumns}
          data={products}
          striped
        />
      </section>
    </main>
  )
}

export default App
