export default function () {
  this.transition(
    this.fromRoute('home'),
    this.toRoute('contact'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.toRoute('engage'),
    this.use('fade'),
    this.reverse('fade')
  );

  this.transition(
    this.fromRoute('engage.find'),
    this.toRoute('engage.sell'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('engage.sell'),
    this.toRoute('engage.give'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
