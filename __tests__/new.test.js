

it("employee should have a name", () => {
    const obj = new Arithmetic();

    expect("number" in obj).toEqual(true);
  });

  it("should set 'number' when created", () => {
    const num = 108;

    const obj = new Arithmetic(num);

    expect(obj.number).toEqual(num);
  });

  it("should default 'number' to 0", () => {
    const obj = new Arithmetic();

    expect(obj.number).toEqual(0);
  });