import Counter from "../componets/Counter"; 

export default function Page() {
  return  (
    <main style = {{ padding: 24}}>
      <h1>Button Counter</h1>
      <section style = {{ marginBottom: 24}}>
        <h2>Default Counter</h2> 
        <Counter />
      </section>
      <section>
        <h2>Custom Props</h2>
        <Counter initialCount={10} initialStep={5} />
      </section>
    </main>

  );
}


















