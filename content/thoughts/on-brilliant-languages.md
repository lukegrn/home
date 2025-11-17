---
title: On Brilliant (Programming) Languages
date: 2025-10-25
params:
    author: Luke Green
draft: true
---

You don't need to, and probably shouldn't, use a brilliant programming
langauges.

There's a quote from Rob Pike[^1], of Google[^2] fame, that says "\[Our
programmers\] are not capable of understanding a brilliant language." While
that's a particularly callous way to put it, I think the point stands. _To make
good software, a simple language is often the best choice._

## A journey with Rust, and then, OCaml

Rust and OCaml are both _brilliant_ languages. Rust promises complete memory
safety, while OCaml promises a type safe, functional language that is usable. To
see just how ergonomic, and elegant these brilliant languages can be, lets look
at some code to square a list of numbers.

OCaml:

```
let square lst = lst |> List.map (fun i -> i * i)
```

And Rust:

```
fn square(lst: Vec<i64>) -> Vec<i64> {
    lst.iter().map(|i| i*i).collect()
}
```

And finally, in a _simple_ language, Go

```
func square(lst []int) (squared []int) {
	for _, i := range lst {
		squared = append(squared, i*i)
	}

	return squared
}
```

Definitely, both OCaml and Rust are more elegant and concise. Arguably they are
clearer[^3] as well. So what's the rub? Let's take a look at a more real-world
example.

[^1]: https://en.wikipedia.org/wiki/Rob_Pike

[^2]:
    Don't think this is an endorsement of Google from me. In general I think
    they are an evil company to be avoided (see how in
    [my alternatives](/alternatives)!). However, they do know a thing or two
    about building software.

[^3]: Assuming the syntaxes of these three languages are equally familiar.
