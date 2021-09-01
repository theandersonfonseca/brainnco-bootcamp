import { Button } from './Button';
import { H2 } from './H2';

export function Content() {
  return (
    <main className='content'>
      <section className='section'>
        <H2>Lorem Ipsum</H2>

        <p className='paragraph'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
          dolor in ipsum lobortis, ac facilisis justo rutrum. Cras eu dui
          pharetra, rhoncus augue euismod, pulvinar orci. Mauris id bibendum mi,
          tristique interdum elit. Nulla facilisi. Suspendisse in cursus enim.
          Nam vitae accumsan lectus.
        </p>

        <p className='paragraph'>
          Cras in cursus ante. Nulla facilisi. Nulla hendrerit ultricies ipsum
          facilisis interdum. Nullam quis arcu ultricies augue luctus facilisis.
          In metus quam, fermentum suscipit gravida ut, elementum non neque.
          Aenean mollis purus sit amet urna scelerisque, sed semper nulla
          tincidunt. Cras egestas dui maximus urna dapibus consequat at nec
          metus. Quisque fringilla nisi non augue porta, et consectetur lacus
          ultrices. Suspendisse a lorem eleifend, luctus ante ac, cursus enim.
          Duis eu congue diam. In ante ex, hendrerit vitae eros id, elementum
          commodo nibh. Duis semper neque in ante euismod facilisis.
        </p>

        <p className='paragraph'>
          Pellentesque a elit tincidunt orci dignissim condimentum vitae et
          orci. Phasellus fringilla at justo et viverra. Vivamus iaculis, risus
          convallis aliquet pretium, nisl metus consequat risus, eget tempus dui
          ipsum vitae lorem. Pellentesque turpis tortor, efficitur nec lacus
          vel, dictum condimentum velit. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Phasellus rutrum cursus tortor ac sodales.
          Donec auctor ipsum pulvinar tellus convallis finibus. Cras id mauris
          lacus. Nulla consectetur, metus quis volutpat auctor, augue mauris
          ullamcorper justo, nec tincidunt magna tellus quis ipsum.
        </p>

        <Button kind='primary'>Know more</Button>
      </section>
    </main>
  );
}
